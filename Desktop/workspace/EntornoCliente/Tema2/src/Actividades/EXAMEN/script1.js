"use strict"

// Escribe una función que reciba tres números y devuelva el mayor de ellos. 
// Si los números son iguales, indica que son iguales.

function numeroMayor (a, b, c) {
    if (a > b && a > c) {
        return ("El número mayor es a " + a);
        } else if (b > a && b > c) {
            return ("El número mayor es b " + b);
            } else if (c > a && c > b) {
                return ("El número mayor es c " + c);
                } else{
                    return ("Los números son iguales");
                }
            }
            
console.log(numeroMayor(5, 3, 7)); // El número mayor es c