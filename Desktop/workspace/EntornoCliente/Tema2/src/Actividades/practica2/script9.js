"use strict"

let nombre = ["Celia", "Ana", "lola"];
let nombreBuscado = prompt ("Ingrese el nombre a buscar");

if (nombre.find(nombre =>nombre === nombreBuscado)){
    console.log("Nombre encontrado");
}else {
    console.log("Nombre no encontrado");
}