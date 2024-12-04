"use strict"
// Crea un programa que determine si un número ingresado por el usuario es par o impar

let numero = Number (prompt("Inserte un número"));

if(numero % 2 ==0){
    alert(`El número ${numero}ingresado es par`);
}else{
    alert(`El número ${numero} ingresado es impar`);
}