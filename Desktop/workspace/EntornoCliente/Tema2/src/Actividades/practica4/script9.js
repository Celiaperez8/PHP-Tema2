"use strict"

function encontrarInterseccion(array1, array2) {
    let set1 = new Set(array1);
    return array2.filter(num => set1.has(num));
}
console.log(encontrarInterseccion([1, 2, 3], [2, 3, 4]));
