<!-- Muestra por pantalla todos los números pares comprendidos entre el 1 y 1000, en filas 
de 5 números, 10 números, 15 números... -->

<?php
//fila de 5
$count = 0;
for ($i = 2; $i <= 1000; $i += 2) {
    echo $i . " ";
    $count++;
    if ($count % 5 == 0) {
        echo "<br>";
    }
}
echo "<br>";
//fila de 10
$count = 0;
for ($i = 2; $i <= 1000; $i += 2) {
    echo $i . " ";
    $count++;
    if ($count % 10 == 0) {
        echo "<br>";
    }
}
echo "<br>";
//fila de 15
$count = 0;
for ($i = 2; $i <= 1000; $i += 2) {
    echo $i . " ";
    $count++;
    if ($count % 15 == 0) {
        echo "<br>";
    }
}



?>

