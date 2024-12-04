"use strict"

/*  Escribe un programa que pida dos valores por prompt, deberá preguntar si se desea convertir alguno de
 los valores a número y una vez que tengamos los dos valores en el tipo deseado deberemos compararlos
 y deberemos mostrar por alert si son iguales en tipo y valor, solo en valor o son diferentes. Por consola
 deberemos mostrar de que tipo de dato se trata. */

// Pedimos los valores mediante prompt
let valor1 = prompt("Introduce el primer valor:");
let valor2 = prompt("Introduce el segundo valor:");

// Preguntamos si se desea convertir el primer valor a número
if (confirm("¿Deseas convertir el primer valor a número?")) {
    valor1 = Number(valor1);
}

// Preguntamos si se desea convertir el segundo valor a número
if (confirm("¿Deseas convertir el segundo valor a número?")) {
    valor2 = Number(valor2);
}

// Mostramos por consola los tipos de datos de cada valor
console.log("Tipo de dato del primer valor:", typeof valor1);
console.log("Tipo de dato del segundo valor:", typeof valor2);

// Comparamos los valores y mostramos el resultado con alert
if (valor1 === valor2) {
    alert("Los valores son iguales en tipo y valor.");
} else if (valor1 == valor2) {
    alert("Los valores son iguales solo en valor.");
} else {
    alert("Los valores son diferentes.");
}


