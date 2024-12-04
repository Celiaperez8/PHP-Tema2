"use strict"

//Crea un programa que pida al usuario un mensaje y un número de repeticiones, y luego repita el
//mensaje en la consola esa cantidad de veces

let mensaje = prompt("Inserte un mensaje");
let numeroVeces = Number (prompt("Indique el número de veces que se repita"));

for(let i= 0; i<numeroVeces; i++){
    console.log(mensaje);
}