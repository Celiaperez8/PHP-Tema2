"use strict"

function sumaDigitos (num) {
    let suma = 0;
    let digitos = num.toString();

    for (let digito of digitos){
        suma += Number(digito);
    }
    return suma;
    }
console.log(sumaDigitos(123));