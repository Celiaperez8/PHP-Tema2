"use strict"

let array = [1, 2, 3, 1, 4, 1];
let numeroBuscado = Number(prompt("Introduce el número a buscar:"));
let conteo = array.filter(num => num === numeroBuscado).length;
console.log(`El número ${numeroBuscado} aparece ${conteo} veces.`);
