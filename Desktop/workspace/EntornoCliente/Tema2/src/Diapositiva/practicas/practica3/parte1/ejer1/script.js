"use srict"
/*Crea una función tradicional que reciba un array de números y devuelva un nuevo array que contenga sólo los
 números positivos. Utiliza una estructura condicional if*/

 function filtrarPositivos(array) {
    let positivos = []; //array para almacenar los números positivos
    for (let i = 0; i < array.length; i++) { // 
      if (array[i] > 0) { // Si el número es positivo
        positivos.push(array[i]); // Lo agregamos al array de positivos
      }
    }
    return positivos; // Retornamos el array de números positivos
 }

 console.log("Los números positivos son " +this.positivos);
