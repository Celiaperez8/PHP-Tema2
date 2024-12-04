"use strict"

const procesarNumeros = array => array.map(num => num * 2).filter(num => num > 10);
console.log(procesarNumeros([3, 5, 6, 7]));
