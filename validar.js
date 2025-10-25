function validarFormulario() {
    let nombres = document.getElementById("nombres").value.trim();
    let apellidos = document.getElementById("apellidos").value.trim();
    let email = document.getElementById("email").value.trim();
    let nacimiento = document.getElementById("nacimiento").value;
    let telefono = document.getElementById("telefono").value.trim();
    let generoM = document.getElementById("masc").checked;
    let generoF = document.getElementById("fem").checked;
    let paquete = document.getElementById("paquete").value;
    let terminos = document.getElementsByName("terminos");

    if (nombres == "" || apellidos == "") {
        alert("Por favor, ingrese su nombre y apellido");
        return false;
    }

    if (email == "") {
        alert("Debe ingresar su correo electrónico");
        return false;
    }

    if (nacimiento == "") {
        alert("Seleccione su fecha de nacimiento");
        return false;
    }

    if (telefono == "" || isNaN(telefono) || telefono.length != 9) {
        alert("Ingrese un número de teléfono válido");
        return false;
    }

    if (!generoM && !generoF) {
        alert("Seleccione su género");
        return false;
    }

    if (paquete == "Seleccione el paquete a adquirir") {
        alert("Debe seleccionar un paquete");
        return false;
    }

    let aceptados = 0;
    for (let i = 0; i < terminos.length; i++) {
        if (terminos[i].checked) {
            aceptados++;
        }
    }
    if (aceptados < 2) {
        alert("Debe aceptar los términos y condiciones y recibir noticias");
        return false;
    }

    alert("Registro completado correctamente");
    return true;
}