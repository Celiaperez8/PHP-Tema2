"use strict"

function iteradorArray(array) {
    for (let elemento of array) {
        yield elemento;
    }
}
let iterador = iteradorArray([1, 2, 3, 4]);
console.log(iterador.next().value); // 1
console.log(iterador.next().value); // 2

