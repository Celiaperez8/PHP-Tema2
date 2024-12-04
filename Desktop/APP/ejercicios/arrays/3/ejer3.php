<?php
//Almacena en un array los 10 primeros números pares.  Imprímelos cada uno en una fila.

for ($i = 1; $i <= 10; $i++) {
    $numeros_pares[] = 2 * $i;
}

// Imprimir cada número en una fila
foreach ($numeros_pares as $numero) {
    echo $numero . "<br>";
}

?>