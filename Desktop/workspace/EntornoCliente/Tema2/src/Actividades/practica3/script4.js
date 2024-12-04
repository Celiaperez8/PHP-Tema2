"use strict"
const calcularProducto = array => array.reduce((acum, num) => acum * num, 1);
console.log(calcularProducto([1, 2, 3, 4]));
