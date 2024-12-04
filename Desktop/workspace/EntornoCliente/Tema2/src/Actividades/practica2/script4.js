"use strict"

let numero = Number (prompt("Ingrese un número"));

let suma = 0;

for (let i= 0; i < numero; i++) {

suma += i
}

console.log("La suma de los primeros " + numero + " números enteros positivos es: " + suma);


