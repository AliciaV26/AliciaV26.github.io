//Newsletter
function guardar(){
    email= document.getElementById("email").value;

    valores_null=false;
    if(email == ""){
        alert("Complete el campo para continuar");
        valores_null = true;
    }

    if(valores_null == false){
    db.collection("usuario_newsletter").add({
        email: document.getElementById("email").value
    })
    .then((docRef) => {
        alert("Fue registrado a la newsletter con éxito")
    })
    .catch((error) => {
        alert("Error. No pudo ser registrado a la newsletter")
    });
    }//if
}

/*RESERVAR ENTRADAS*/
function reservar(){
    const nombre= document.getElementById("nombre").value;
    const email= auth.currentUser;
    const cantidad_boleto= document.getElementById("cantidad_boleto").value;
    const fecha= document.getElementById("fecha").value;

    valores_null = false;

    var hoy             = new Date();
    var fechaFormulario = new Date(fecha);

    // Comparamos solo las fechas => no las horas!!
    hoy.setHours(0,0,0,0);  // Lo iniciamos a 00:00 horas

    if (!(hoy <= fechaFormulario)){
        alert("No puede reservar en una fecha pasada");
        valores_null = true;
    }

    if(email == null){
        alert("Inicie sesión para reservar");
    }
    
    if((nombre == "") || (email == "") || (cantidad_boleto == "") || (fecha == "")){
        alert("Complete los campos");
        valores_null = true;
    }

    if((cantidad_boleto <= 0) || (cantidad_boleto > 10)){
        alert("Solo puede reservar de 1 a 10 boletos");
        valores_null = true;
    }

    if(valores_null == false){
    db.collection("reserva").add({

        nombre: document.getElementById("nombre").value,
        email: auth.currentUser.email,
        cantidad_boleto: document.getElementById("cantidad_boleto").value,
        fecha: document.getElementById("fecha").value
    })
    .then((docRef) => {
        alert("Se hizo una reserva con éxito")
        console.log("No error")
        window.location.replace('/JS/reservas.html');
    })
    .catch((error) => {
        alert("Error. No pudo realizarse una reserva")
        console.log("error")
    });
    }//if
}

function generarTabla(){
    
    var numFilas = 0;
    var contenedorTabla;
    var activo;

    db.collection("reserva").where("email", "==", auth.currentUser.email)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            numFilas ++;
        });
        console.log("Cantidad reservas: "+numFilas);
        contenedorTabla = document.getElementById("contenedorTabla");

        contenedorTabla.innerHTML = "";
        var tabla ="<table class=tabla>";

        tabla += "<td class=campos>Nombre</td>";
        tabla += "<td class=campos>Correo</td>";
        tabla += "<td class=campos>Cantidad de boletos</td>";
        tabla += "<td class=campos>Fecha de reservación</td>";
        tabla += "<td class=campos>Estado</td>";

        tabla += "<tr>";
        db.collection("reserva").where("email", "==", auth.currentUser.email)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                activo = false;
                var hoy             = new Date();
                var fechaFormulario = new Date(doc.data().fecha);
            
                // Comparamos solo las fechas => no las horas!!
                hoy.setHours(0,0,0,0);  // Lo iniciamos a 00:00 horas
            
                if (hoy <= fechaFormulario){
                    activo = true;
                }
                    tabla += "<td>"+doc.data().nombre+"</td>"
                    tabla += "<td>"+doc.data().email+"</td>"
                    tabla += "<td>"+doc.data().cantidad_boleto+"</td>"
                    tabla += "<td>"+doc.data().fecha+"</td>"
                    if(activo == true){
                        tabla += "<td>Activo</td>"
                    }
                    else{
                        tabla += "<td>Vencido</td>" 
                    }

                tabla += "</tr>"
            });
            tabla += "</table>"
            contenedorTabla.innerHTML = tabla;
        })
        
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);

    });
}



