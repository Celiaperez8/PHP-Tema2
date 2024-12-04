"use strict"
// Escribe un programa que calcule la suma de los primeros n números naturales, donde n es un número dado.

let numero = Number (prompt("Inserte un numero"));
let suma = 0;

for(let i=0; i<numero; i++){
    suma+= i;
}

console.log("La suma de los primeros números es " + numero + " números naturales es: " + suma);