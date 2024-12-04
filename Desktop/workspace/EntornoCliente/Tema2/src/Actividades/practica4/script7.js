"use strict"

const calcularTotalDescuento = productos => productos.map(p => p.precio * 0.9).reduce((acum, precio) => acum + precio, 0);
let productos = [
    { nombre: "Producto A", precio: 50 },
    { nombre: "Producto B", precio: 150 }
];
console.log(calcularTotalDescuento(productos));


