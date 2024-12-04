"use strict"

function validarFormulario() {
    let nombre = prompt("Introduce tu nombre:");
    let edad = prompt("Introduce tu edad:");
    let aceptaTerminos = confirm("¿Aceptas los términos?");
    
    if (nombre && Number(edad) >= 18 && aceptaTerminos) {
        alert("Formulario válido.");
    } else {
        alert("Formulario inválido.");
    }
}
validarFormulario();
