"use strict"

//funcion generadora

function generarNumerosPares() {
    let numero = Number(prompt("Ingrese un número para generar números pares hasta ese valor"));
    
    //array para almacenar los números pares
    let arrayNumerosPares = [];
    
    //for para generar los números pares
    for (let i = 0; i <= numero; i++) {
        if (i % 2 === 0) {
            //push para agregar elementos al array
            arrayNumerosPares.push(i);
            }
            }
            return arrayNumerosPares;
            }
            
            //llamada a la funcion generadora
            let numerosPares = generarPares();
            console.log(numerosPares);

        




