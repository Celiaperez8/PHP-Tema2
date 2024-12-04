"use strict"

function filtrarPositivos(array) {
    let positivos = [];
    for (let num of array) {
        if (num > 0) {
            positivos.push(num);
        }
    }
    return positivos;
}
console.log(filtrarPositivos([-1, 2, -3, 4, 5]));

