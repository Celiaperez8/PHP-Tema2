"use strict"

let array1 = [1, 2, 3];
let array2 = [2, 3, 4];
let comunes = array1.filter(num => array2.includes(num));
console.log(comunes);
