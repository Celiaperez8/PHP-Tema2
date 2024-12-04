"use strict"
// Dado un array de números, escribe un programa que calcule la 
//suma de todos los valores en el array

let numeros=[1, 2, 3, 4, 5, 6, 7];
let sumaTotal = numeros.reduce(function(acumulador, numero){
    return acumulador + numero;
}, 0);

console.log(sumaTotal);