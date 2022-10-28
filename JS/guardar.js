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
        document.getElementById("formulario_entradas").reset();
    })
    .catch((error) => {
        alert("Error. No pudo realizarse una reserva")
        console.log("error")
    });
    }//if
}





