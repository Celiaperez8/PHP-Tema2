"use strict"

//suma de números positivos en un array
let array = [-1, 2, -3, 4, 5];
let sumaPositivos = array.filter(num => num > 0).reduce((acum, num) => acum + num, 0);
console.log(sumaPositivos);
