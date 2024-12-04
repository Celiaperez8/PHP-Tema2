"use strict"

let array1 = [3, 1, 4];
let array2 = [2, 5, 6];
let combinado = [...array1, ...array2].sort((a, b) => a - b);
console.log(combinado);
