"use strict"

/*Crea una función flecha que reciba un array de números, multiplique cada número por 2 utilizando
 map(), y luego filtre los resultados para quedarse sólo con los números mayores que 10 utilizando filter().*/

let numeros = [3, 5, 7, 10, 12];

let procesarNumeros = (arr) => arr
    .map(num => num *2)
    .filter(num => num > 10);

let resultado = procesarNumeros(numeros);
console.log(resultado);

 