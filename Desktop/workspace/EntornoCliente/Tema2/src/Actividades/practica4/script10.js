"use strict"

function* generarID() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
let generador = generarID();
console.log(generador.next().value); // 1
console.log(generador.next().value); // 2
console.log(generador.next().value); // 3
