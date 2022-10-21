function guardar(){
    db.collection("usuario_newsletter").add({
        email: document.getElementById("email").value
    })
    .then((docRef) => {
        alert("Fue registrado a la newsletter con éxito")
    })
    .catch((error) => {
        alert("Error. No pudo ser registrado a la newsletter")
    });
}

function guardar1(){
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
}