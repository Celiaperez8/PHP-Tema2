"use strict"

// crear un script que pida a un usuario su nombre luegos si quiere continuar usando confirm

let nombre = prompt("Introduce su nombre");
let continuar = confirm("¿Desea continuar?");

if (continuar) {
    alert(`Hola ${nombre}, bienvenido a mi sitio web`);
}else{
    alert(`Adiós ${nombre}`);
}


