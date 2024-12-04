"use strict"
//el usuario inserta un mensaje e indica el número de repeticiones que se repiten por consola
let mensaje = prompt("Ingrese un mensaje");
let repeticiones = parseInt(prompt("Ingrese el número de repeticiones"));
//se crea un bucle for que se repite el número de veces que el usuario ingresó
for (let i = 0; i < repeticiones; i++) {
    //dentro del bucle se imprime el mensaje ingresado por el usuario
    console.log(mensaje);
}
