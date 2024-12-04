"use strict"

/*Dado un array de números, usa un ciclo para encontrar tanto el valor mínimo como el máximo en el array.
 Imprime ambos valores*/

 function encontrarMinimoMaximo(array) {
    // Verificamos si el array está vacío
    if (array.length === 0) {
        console.log("El array está vacío.");
        return;
    }

    // Inicializamos el mínimo y máximo con el primer elemento del array
    let minimo = array[0];
    let maximo = array[0];

    // Recorremos el array
    for (let i = 1; i < array.length; i++) {
        // Comparamos para encontrar el mínimo
        if (array[i] < minimo) {
            minimo = array[i];
        }
        // Comparamos para encontrar el máximo
        if (array[i] > maximo) {
            maximo = array[i];
        }
    }

    // Imprimimos los resultados
    console.log("Valor mínimo:", minimo);
    console.log("Valor máximo:", maximo);
}

// Ejemplo de uso
const numeros = [3, 5, 1, 8, -2, 7];
encontrarMinimoMaximo(numeros);


