"use strict"

console.log(x); //undefined (por hoisting)
console.log(y); //error no esta definida
var x = 5;

console.log(x); //5
var x = 10;// No causa error, X redefine
console.log(x); //10
