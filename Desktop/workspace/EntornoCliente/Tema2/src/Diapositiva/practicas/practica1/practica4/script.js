"use strict"
// Escribe un programa que compare dos números y muestre en la consola cuál es mayor, cuál es
//menor, o si son iguales.

let primerNumero = 8;
let segundoNumero = 8;

if(primerNumero < segundoNumero){
    console.log(segundoNumero + " es mayor que " + primerNumero)
}else if(primerNumero>segundoNumero){
    console.log(primerNumero+ " es mayor que " + segundoNumero);
}else{
    console.log("Son iguales")
}