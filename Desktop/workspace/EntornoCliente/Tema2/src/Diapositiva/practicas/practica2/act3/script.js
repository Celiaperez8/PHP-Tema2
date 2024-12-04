"use strict"

//Dado un número almacenado en una variable, escribe un programa que clasifique el número en una de las
//siguientes categorías: "menor que 10", "entre 10 y 20", "mayor que 20"

let numero = 10;

if (numero<10){
    console.log("menor que 10");
}else if(numero>=10 && numero<=20){
    console.log("Esta entre el 10 y el 20");
}else{
    console.log("Es mayor que 20");
}