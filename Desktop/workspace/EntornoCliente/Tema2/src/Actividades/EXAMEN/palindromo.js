"use strict"

function esPalindromoTexto(texto) {
    // Convertir a minúsculas y eliminar espacios manualmente
    let textoProcesado = "";
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== " ") {
            textoProcesado += texto[i].toLowerCase();
        }
    }

    // Comprobar si es igual al reverso
    for (let i = 0; i < textoProcesado.length / 2; i++) {
        if (textoProcesado[i] !== textoProcesado[textoProcesado.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Ejemplos de uso
console.log(esPalindromoTexto("anita lava la tina")); // true
console.log(esPalindromoTexto("Hola mundo"));        // false
