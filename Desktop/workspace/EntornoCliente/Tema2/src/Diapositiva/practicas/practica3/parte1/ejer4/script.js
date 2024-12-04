"use strict"
/*Crea una función flecha que reciba un array de números y devuelva el producto de todos los números
 utilizando el método reduce().*/

 let numeros = [2, 4,];

 let multiplicacion = numeros.reduce(function(acumulador, numero){
        return acumulador * numero;
 }, 0);

 console.log(multiplicacion);


