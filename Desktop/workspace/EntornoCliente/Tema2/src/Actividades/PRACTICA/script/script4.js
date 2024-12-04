"use strict"

// Crea una función que reciba un número n e imprima la suma de los primeros n números naturales. Usa un bucle for.

function sumaNumeros(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
        }
        return suma;
        }
        
let n = Number (prompt("Introduce un número"));
console.log("La suma de los primeros " + n + " numeros naturales es " + sumaNumeros(n));
