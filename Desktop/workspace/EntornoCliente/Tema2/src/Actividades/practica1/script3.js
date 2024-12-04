"use strict"

let precioOriginal = Number(prompt("Indica el precio original"));
let descuento = Number(prompt("Indica el descuento"));

let precioFinal = precioOriginal - (precioOriginal * descuento / 100);
console.log("El precio final " +precioFinal);

