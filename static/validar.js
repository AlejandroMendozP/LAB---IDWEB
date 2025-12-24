const form = document.getElementById("formulario");
const resultado = document.getElementById("resultado");
const tabla = document.getElementById("tabla");

function validarFormulario() {

    const nombres = document.getElementById("nombres").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();    
    const seleccionado = document.querySelector('input[name="tipo_documento"]:checked');
    const numeroD = document.getElementById("numero_documento").value.trim();
    const nacimiento = document.getElementById("nacimiento").value;
    const genero = document.querySelector('input[name="genero"]:checked');
    const email = document.getElementById("email").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const emailConfirmacion = document.getElementById("emailConfirm").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();
    const tarjeta = document.querySelector('#tarjeta').value;
    const numeroTarjeta = document.getElementById("numeroTarjeta").value.trim();
    const cvv = document.getElementById("CVV").value.trim();
    const fechadevencimiento = document.getElementById("fechavencimiento").value;
    const paquete = document.querySelector('#paquete').value;
    const terminoTyC = document.getElementsByName("terminosTyC");
    const terminosNoticias = document.getElementsByName("terminosNoticias");

    const regexNombreApellido = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
    const regexDocumento = /^[A-Za-z0-9]{6,15}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefono = /^\d{9}$/;
    const regexNumeroTarjeta = /^\d{16}$/;
    const regexCVV = /^\d{3}$/;

    if (nombres == "" || apellidos == "") {
        alert("Por favor, ingrese sus nombres y apellidos");
        return false;
    }
    if (!regexNombreApellido.test(nombres) || !regexNombreApellido.test(apellidos)) {
        alert("El nombre y apellido solo deben contener letras y espacios");
        return false;
    }

    if (!seleccionado){
        alert("Seleccione un tipo de documento");
        return false;
    }

    if (!regexDocumento.test(numeroD)){
        alert("Por favor ingrese un numero de documento valido");
        return false;
    }

    if (nacimiento == "") {
        alert("Seleccione su fecha de nacimiento");
        return false;
    }

    if (genero == null) {
        alert("Seleccione su género");
        return false;
    }

    if (email == "") {
        alert("Debe ingresar su correo electrónico");
        return false;
    }
    if (!regexEmail.test(email)){
        alert("Ingrese un correo electrónico válido");
        return false;
    }

    if (direccion == ""){
        alert("Ingrese su dirección");
        return false;
    }

    if (telefono == "" || !regexTelefono.test(telefono) || telefono.length != 9) {
        alert("Ingrese un número de teléfono válido");
        return false;
    }

    if (contraseña == ""){
        alert("Ingrese una contraseña");
        return false;
    }

    if (!tarjeta){
        alert("Seleccione un tipo de tarjeta");
        return false;
    }

    if (!regexNumeroTarjeta.test(numeroTarjeta)){
        alert("Por favor ingrese un numero de tarjeta valido");
        return false;
    }

    if (!regexCVV.test(cvv)){
        alert("Por favor ingrese un CVV valido");
        return false;
    }

    if (fechadevencimiento == ""){
        alert("Seleccione la fecha de vencimiento de su tarjeta");
        return false;
    }

    if (paquete == "Seleccione el paquete a adquirir") {
        alert("Debe seleccionar un paquete");
        return false;
    }

    if (email !== emailConfirmacion) {
        alert("Los correos electrónicos no coinciden");
        return false;
    }

    return true;
}

form.addEventListener("submit", (e) => {
    if (!validarFormulario()) {
        e.preventDefault();
    }
});