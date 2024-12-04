"use script"
/**Crea un programa que calcule el precio final de un producto después de aplicar un descuento. Usa
 prompt para pedir al usuario el precio original y el porcentaje de descuento. Calcula el precio final y
 muestra todos dos datos por consola. */

 let precioOriginal = Number (prompt(`Inserte el precio original`));
 let descuento = Number(prompt(`Inserte el descuento`));
let precioFinal = ((precioOriginal*descuento)/100) + precioOriginal;

alert(precioFinal);
