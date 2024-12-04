/*Dado un array de números, escribe un programa que cuente cuántas veces aparece un número específico en
 el array.*/

function contarOcurrencias(array, numeroBuscado) {
    let contador = 0; // Inicializamos un contador en 0

    // Recorremos el array
    for (let i = 0; i < array.length; i++) {
        // Comparamos el elemento actual con el número buscado
        if (array[i] === numeroBuscado) {
            contador++; // Si son iguales, incrementamos el contador
        }
    }

    return contador; // Devolvemos el número de ocurrencias
}

const numeros = [1, 2, 3, 4, 2, 5, 2];
const numeroBuscado = 2;
const ocurrencias = contarOcurrencias(numeros, numeroBuscado);

console.log(`El número ${numeroBuscado} aparece ${ocurrencias} veces en el array.`);