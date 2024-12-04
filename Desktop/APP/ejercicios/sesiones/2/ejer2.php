<?php
session_start();

// Inicializar variables de sesión si no existen
if (!isset($_SESSION['contador'])) {
    $_SESSION['contador'] = 0;
    $_SESSION['suma_impares'] = 0;
    $_SESSION['contador_impares'] = 0;
    $_SESSION['mayor_par'] = PHP_INT_MIN;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $numero = intval($_POST['numero']);

    if ($numero >= 0) {
        $_SESSION['contador']++;

        if ($numero % 2 == 0) {
            $_SESSION['mayor_par'] = max($_SESSION['mayor_par'], $numero);
        } else {
            $_SESSION['suma_impares'] += $numero;
            $_SESSION['contador_impares']++;
        }
    } else {
        $media_impares = $_SESSION['contador_impares'] > 0 ? $_SESSION['suma_impares'] / $_SESSION['contador_impares'] : 0;
        echo "Números introducidos: " . $_SESSION['contador'] . "<br>";
        echo "Media de impares: $media_impares<br>";
        echo "Mayor número par: " . ($_SESSION['mayor_par'] == PHP_INT_MIN ? 'Ninguno' : $_SESSION['mayor_par']) . "<br>";
        session_destroy();
    }
}
?>

<form method="POST">
    Introduce un número (número negativo para terminar): 
    <input type="number" name="numero" required>
    <button type="submit">Enviar</button>
</form>
