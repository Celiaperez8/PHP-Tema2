"use strict"

function cifradorCesar (texto, desplazamiento) {
    let alfabeto = "abcdefghijklmnopqrstuvwxyz";
    let textoCifrado = "";

    for (let letra of texto.toLowerCase()){
        if (alfabeto.includes(letra)){
            let indice = (alfabeto.indexOf(letra)+ desplazamiento) % 26;
            textoCifrado += alfabeto[indice];
            } else{
                textoCifrado += letra;
            }
    }
    return textoCifrado;
    }
    console.log(cifradorCesar("hola", 3)); // "khoor"