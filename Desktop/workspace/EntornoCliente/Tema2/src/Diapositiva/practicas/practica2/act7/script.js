"use strict"

// Dado un array de números, usa el método filter() para crear un nuevo
// array que contenga solo los números pares.

let numeros = [1, 2, 3, 4, 5];

let numerosPares = numeros.filter(function(numero){
    return numero % 2 === 0;
})

console.log(numerosPares);
