"use strict"

/*  Escribe un programa que verifique si un número almacenado en una variable es un entero o no. Imprime "Es
 un entero" o "No es un entero" según el caso.*/


let numero = Number(prompt("Introduce un número "));

 if (Number.isInteger(numero)){
    console.log("El número " + numero + " es entero");
 }else{
    console.log("El número " + numero + " no es entero");
 }
