"use strict"

function matriz (array){
    let acumulador = 0;
    for(let i=0; array.length>i; i++){
        for(let f=0; array [i].length>f;f++){
            acumulador += array[i][f];
        }
    }
    return acumulador;
};
let array=[[1, 2],[3,4],[5,6]];
let final = matriz (array);
console.log(final);
