"use strict"

function contarFrecuencia(texto) {
    let palabras = texto.split(" ");
    let frecuencia = new Map();
    palabras.forEach(palabra => {
        frecuencia.set(palabra, (frecuencia.get(palabra) || 0) + 1);
    });
    return frecuencia;
}
console.log(contarFrecuencia("hola mundo hola universo hola"));


                
