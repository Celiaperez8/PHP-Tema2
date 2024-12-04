"Use strict"

//Crea un juego en el que el usuario tenga que adivinar un número entre 1 y 10 con un máximo de 3
 //intentos

const aleatorio = Math.floor(Math.random() * 10)+1;
const intentos = 3;
const numero = Number (prompt('Elige u número del 1 al 10'));


for(let i= 0; i<intentos; i++){
    let numero = Number (prompt('Elija un número del 1 al 10'));
if(numero === aleatorio){
    alert('Has acertado'); i=3;
}else{
    alert('Has fallado');
if(i==2) {
    console.warn('Has agotado los intentos');
}
}
}
