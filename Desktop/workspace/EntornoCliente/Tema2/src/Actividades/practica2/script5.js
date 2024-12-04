"use strict"


let array = [1, 2, 3, 4, 5];
let x = Number(prompt("Introduce un valor para multiplicar el array:"));
let nuevoArray = array.map(num => num * x);
console.log(nuevoArray);
