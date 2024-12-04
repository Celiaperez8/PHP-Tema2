"use strict"
//Escribe un programa que verifique si un número almacenado en una variable es un entero o no. Imprime "Es
 //un entero" o "No es un entero" según el caso

 let numero = 6;
 if(Number.isInteger(numero)){
    console.log("Es un número entero");
 }else{
    console.log("Es un número decimal");
 }