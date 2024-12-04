<!-- Ejercicio 7. Controla la edad cada 10 años, desde los 0 hasta los 100. Muestra un mensaje indicando 
en qué intervalo está el usuario. U liza la estructura de control correcta. -->

<?php
$edad = rand(0, 100); // Genera un número aleatorio entre 0 y 100
echo "Edad: $edad<br>";

if ($edad >= 0 && $edad <= 10) {
    echo "El usuario tiene entre 0 y 10 años.";
} elseif ($edad >= 11 && $edad <= 20) {
    echo "El usuario tiene entre 11 y 20 años.";
} elseif ($edad >= 21 && $edad <= 30) {
    echo "El usuario tiene entre 21 y 30 años.";
} elseif ($edad >= 31 && $edad <= 40) {
    echo "El usuario tiene entre 31 y 40 años.";
} elseif ($edad >= 41 && $edad <= 50) {
    echo "El usuario tiene entre 41 y 50 años.";
} elseif ($edad >= 51 && $edad <= 60) {
    echo "El usuario tiene entre 51 y 60 años.";
} elseif ($edad >= 61 && $edad <= 70) {
    echo "El usuario tiene entre 61 y 70 años.";
} elseif ($edad >= 71 && $edad <= 80) {
    echo "El usuario tiene entre 71 y 80 años.";
} elseif ($edad >= 81 && $edad <= 90) {
    echo "El usuario tiene entre 81 y 90 años.";
} elseif ($edad >= 91 && $edad <= 100) {
    echo "El usuario tiene entre 91 y 100 años.";
} else {
    echo "Edad fuera del rango válido.";
}
?>
