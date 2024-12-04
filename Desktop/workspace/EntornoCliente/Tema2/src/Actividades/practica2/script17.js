"use strict"

let array = [1, 2, 3, 2, 1];
let esPalindromo = array.join('') === array.reverse().join('');
console.log(esPalindromo ? "Es un palíndromo" : "No es un palíndromo");
