"use strict"

/*Dado un array de números, usa every() para verificar si todos los números en el array son pares. Imprime
true si todos son pares, de lo contrario imprime false.  la función every es un método de los arrays que
verifica si todos los elementos de un array cumlen con una determinada condición especificada en la función.*/


let numbers = [2, 4, 6, 8, 10];
let result = numbers.every(num => num % 2 === 0);
console.log(result); // true
