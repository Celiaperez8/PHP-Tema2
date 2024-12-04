"use strict"

function sumarMatriz(matriz) {
    let suma = 0;
    for (let fila of matriz) {
        for (let num of fila) {
            suma += num;
        }
    }
    return suma;
}
console.log(sumarMatriz([[1, 2], [3, 4], [5, 6]]));
