"use strict"
/* Crea un programa que convierta una temperatura dada en grados Celsius a grados Fahrenhenit. Usa
 prompt para pedir la temperatura en grados Celsius y muestra por alert la temperatura en Fahrenheit.
 Utiliza la fórmula F=(C*9/5)+32*/

let temperatura = Number(prompt("Inserte la temperatura en grados Celcius"));

let Fahrenheit = (temperatura*9/5)+32;

alert(`La temperatura en Celcius es ${temperatura}  y en Fahrenhenit ${Fahrenheit}`);

