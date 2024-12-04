<!--Usando la función que genera un numero aleatorio realiza un script que controle si una 
persona está en edad de trabajar o no, recuerda que la edad laboral es de los 16 a los 65 años. 
Mostrará por pantalla “El usuario está en edad laboral” o por el contrario “El usuario NO está en 
edad laboral”. -->
<?php 

$edad = rand(0, 100);

echo"El usuario tiene $edad años.<br>";
if($edad<=16){
    echo 'No esta en edad laboral.';
}elseif($edad>=65){
    echo 'No esta en edad laboral.';

}else {
    echo 'Esta en edad laboral.';
}


?>
