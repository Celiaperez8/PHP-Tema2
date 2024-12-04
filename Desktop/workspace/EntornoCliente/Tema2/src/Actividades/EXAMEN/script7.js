"use strict"

function sumaPares (array){
    return array.filter(num => num % 2 === 0).reduce((acum, num) => acum + num, 0);
}
console.log(sumaPares([1, 2, 3, 4, 5]));
