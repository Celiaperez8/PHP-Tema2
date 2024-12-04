<?php 
// Ejercicio 6. Realiza un script que controle si el usuario es mayor de edad. (usa la función que genera 
// un numero aleatorio para conseguir la edad)


$edad = rand(1, 100); // Genera un número aleatorio entre 1 y 100
if ($edad >= 18) {
    echo "El usuario es mayor de edad";
} else {
    echo "El usuario es menor de edad";
}
?>
