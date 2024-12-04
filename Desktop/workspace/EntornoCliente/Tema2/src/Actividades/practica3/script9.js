"use strict"

const calcularTotal = productos => productos.map(prod => prod.precio * 0.9).reduce((acum, precio) => acum + precio, 0);
let productos = [
    { nombre: "Producto 1", precio: 100 },
    { nombre: "Producto 2", precio: 200 }
];
console.log(calcularTotal(productos));
