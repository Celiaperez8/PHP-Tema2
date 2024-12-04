"use strict"

//Operaciones con tipos de datos

let numero = 10;
let texto = "10";

let suma = numero + texto; // se convierte el número en string y se concatenan
console.log(suma); //"1020"
console.log(typeof suma) //"string"

let resta = numero - texto //el texto se convierte en número y se realiza la resta
console.log(resta); //-10
console.log(typeof resta); //"number"