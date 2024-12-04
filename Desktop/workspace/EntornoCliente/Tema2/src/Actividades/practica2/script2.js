/*Escribe un programa que tome dos números y determine cuál
 es el mayor. Imprime el resultado */

 let primerNumero = Number (prompt("Introduce el primer número"));
 let segunNumero = Number (prompt("Introduce el segundo número"));

 if (primerNumero>segunNumero){
    console.log("El primer número " + primerNumero +"es mayor que el segundo");
 }else if(primerNumero<segunNumero){
    console.log("El primer número es menor que el segundo");
 }else{
    console.timeLog("Son iguales");
 }
