<!-- Realizar un script que convierta pesetas en euros desde 50 hasta 1000 ambos incluidos, 
saltando de 50 en 50. Usar un bucle FOR para realizar el ejercicio, el po de cambio será 166,386. -->
<?php 


$cambio = 165.386;

//convertir de 50 a 100 en pasos de 50

for ($pesetas = 50; $pesetas <= 1000; $pesetas +=50){
    $euros = $pesetas / $cambio;
    echo "$pesetas pesetas son" .number_format(num:$euros, decimals: 2). " euros <br>";
}




?>