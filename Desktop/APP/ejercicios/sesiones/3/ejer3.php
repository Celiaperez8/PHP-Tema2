<?php
session_start();

// Inicializar variables de sesión si no existen
if (!isset($_SESSION['suma'])) {
    $_SESSION['suma'] = 0;
    $_SESSION['contador'] = 0;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $numero = intval($_POST['numero']);

    if ($_SESSION['suma'] + $numero <= 10000) {
        $_SESSION['suma'] += $numero;
        $_SESSION['contador']++;
    } else {
        $media = $_SESSION['contador'] > 0 ? $_SESSION['suma'] / $_SESSION['contador'] : 0;
        echo "Total acumulado: " . $_SESSION['suma'] . "<br>";
        echo "Números introducidos: " . $_SESSION['contador'] . "<br>";
        echo "Media: $media<br>";
        session_destroy();
    }
}
?>

<form method="POST">
    Introduce un número: 
    <input type="number" name="numero" required>
    <button type="submit">Enviar</button>
</form>
