"use strict"

/* Escribe un programa que calcule la edad de una persona basándose en el año actual y el año de
 nacimiento que ingrese el usuario. Usa prompt para pedir el año actual y el de nacimiento muestra el
 resultado por alert o por console. */

 let anyoNacimiento = Number(prompt(`Inserte su año de nacimiento`));
 let anyoActual = Number (prompt(`Indica el año actual`));
 let cumplido = prompt(`¿Has cumplido los años?`);
 let edadCumplida = anyoActual-anyoNacimiento;
 let edadNoCumplida = edadCumplida-1;


 if(cumplido === "si"){
    alert(`Su edad actual ${edadCumplida}`);
 }else{
    alert(`Su edad actual ${edadNoCumplida}`);
 }