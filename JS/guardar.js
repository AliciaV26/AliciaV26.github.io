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
function guardar1(){
    nombre= document.getElementById("nombre").value;
    email= document.getElementById("email").value;
    cantidad_boleto= document.getElementById("cantidad_boleto").value;
    fecha= document.getElementById("fecha").value;

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
        email: document.getElementById("email").value,
        cantidad_boleto: document.getElementById("cantidad_boleto").value,
        fecha: document.getElementById("fecha").value
    })
    .then((docRef) => {
        alert("Se hizo una reserva con éxito")
        console.log("No error")
    })
    .catch((error) => {
        alert("Error. No pudo realizarse una reserva")
        console.log("error")
    });
    }//if
}

/*REGISTRARSE */
function guardar3(){
    //console.log("Entra");
    nombre= document.getElementById("nombre").value;
    email= document.getElementById("email").value;
    password= document.getElementById("password").value;

    valores_null = false;
    

    if((nombre == "") || (email == "") || (password == "")){
        alert("Complete los campos");
        valores_null = true;
    }
    if(valores_null == false){
    db.collection("usuario").add({

        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    })
    .then((docRef) => {
        alert("Se registró con éxito")
        console.log("No error")
        window.location.href = "https://aliciav26.github.io/"
    })
    .catch((error) => {
        alert("Error. No se pudo registrar el usuario")
        console.log("error")
    });
    }//if
}

/*INICIAR SESIÓN */
function guardar2(){
    
        var usuarioRef = db.collection("usuario");
        var login = true;
        var passwordMatch;

        passwordCheck = document.getElementById("password").value;
        usuarioCheck = document.getElementById("nombre").value;

        usuarioRef.where("nombre","==", usuarioCheck).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.data().password); Mostrar datos
                passwordMatch = doc.data().password;
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
            
        });


        setTimeout(function(){
            if(passwordMatch != passwordCheck){
                alert("Ingrese el usuario y/o contraseña correcta");
                login = false;
            }

            if(login == true){
                alert("Ingresó con éxito");
                window.location.href = "https://aliciav26.github.io/"

            }
        }, 2000);

}


