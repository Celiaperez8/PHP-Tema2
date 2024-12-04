<!-- Repetir el ejercicio anterior usando WHILE. -->
<?php
$cambio = 166.386;
$pesetas = 50;
while ($pesetas <= 1000) {
    $euros = $pesetas / $cambio;
    echo "$pesetas pesetas son " . number_format($euros, 2) . " euros<br>";
    $pesetas += 50;
}
?>

