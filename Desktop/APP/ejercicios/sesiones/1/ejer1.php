<!-- Escribe un programa que calcule la media de un conjunto de números posi vos introducidos por teclado. A priori, el 
programa no sabe cuántos números se introducirán. El usuario indicará que ha terminado de introducir los datos 
cuando meta un número nega vo. U liza sesiones.  -->

<?php
session_start();

// Inicializar variables de sesión si no existen
if (!isset($_SESSION['suma'])) {
    $_SESSION['suma'] = 0;
    $_SESSION['contador'] = 0;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $numero = intval($_POST['numero']);

    if ($numero >= 0) {
        $_SESSION['suma'] += $numero;
        $_SESSION['contador']++;
    } else {
        $media = $_SESSION['contador'] > 0 ? $_SESSION['suma'] / $_SESSION['contador'] : 0;
        echo "Media de los números positivos: $media<br>";
        session_destroy(); // Reiniciar la sesión
    }
}
?>

<form method="POST">
    Introduce un número positivo (número negativo para terminar): 
    <input type="number" name="numero" required>
    <button type="submit">Enviar</button>
</form>
