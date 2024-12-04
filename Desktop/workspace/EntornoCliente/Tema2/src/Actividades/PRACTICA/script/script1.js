"use strict"

function gradosFahrenheit (celsius){
    return(celsius * 9/5) + 32;
}

let celsius = Number (prompt("Ingrese la temperatura en grados Celsius"));

alert("La temperatura en grados Fahrenheit es: " + gradosFahrenheit(celsius));
