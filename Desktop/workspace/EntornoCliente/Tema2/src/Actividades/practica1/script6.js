"use strict"
//el usuario tiene que adivinar un número del 1 al 10 con 3 intentos//

let intentos = 3;
let numero = Math.floor(Math.random() * 10) + 1;


for(let i=0; i<intentos; i++){
    let respuesta = prompt("Adivina un número del 1 al 10");
    if (respuesta == numero) {
        alert("¡Lo has conseguido!");
        break;
        } else if (respuesta < numero) {
            alert("El número que buscas es mayor");
            } else {
                alert("El número que buscas es menor");
            }
        }

