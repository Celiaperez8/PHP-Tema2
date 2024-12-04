"use strict"


function pares(array){
    return array.filter(num => num % 2 === 0);
}
console.log(pares([1, 2, 3, 4, 5]));
