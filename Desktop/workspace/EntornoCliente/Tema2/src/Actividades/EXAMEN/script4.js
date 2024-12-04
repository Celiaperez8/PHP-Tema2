"use strict"

function esPrimo(numero) {
    if (numero <= 1) {
        return false
        }
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
            return false}
            }
            return true
        }
        
console.log(esPrimo(7)) // true
console.log(esPrimo(8)) // false

