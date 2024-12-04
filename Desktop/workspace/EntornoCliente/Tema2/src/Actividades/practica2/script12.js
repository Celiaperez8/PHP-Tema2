"use strict"

let array = [3, 5, 7, 2, 8];
let minimo = array[0];
let maximo = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] < minimo) {
        minimo = array[i];
    }
    if (array[i] > maximo) {
        maximo = array[i];
    }
}

console.log(`Mínimo: ${minimo}, Máximo: ${maximo}`);
