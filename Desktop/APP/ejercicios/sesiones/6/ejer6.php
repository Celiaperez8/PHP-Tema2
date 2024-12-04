<?php
session_start();

// Diccionario inicial
if (!isset($_SESSION['diccionario'])) {
    $_SESSION['diccionario'] = [
        "hello" => "hola",
        "world" => "mundo",
        "cat" => "gato",
        "dog" => "perro",
        "sun" => "sol",
    ];
}

// Elegir 5 palabras aleatorias
if (!isset($_SESSION['palabras'])) {
    $_SESSION['palabras'] = array_rand($_SESSION['diccionario'], 5);
    $_SESSION['respuestas_correctas'] = 0;
    $_SESSION['intentos'] = 0;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $respuesta = $_POST['respuesta'];
    $palabra_actual = $_SESSION['palabras'][$_SESSION['intentos']];
    $traduccion_correcta = $_SESSION['diccionario'][$palabra_actual];

    if ($respuesta === $traduccion_correcta) {
        $_SESSION['respuestas_correctas']++;
    }

    $_SESSION['intentos']++;

    if ($_SESSION['intentos'] >= 5) {
        echo "Correctas: {$_SESSION['respuestas_correctas']}<br>";
        echo "Incorrectas: " . (5 - $_SESSION['respuestas_correctas']) . "<br>";
        session_destroy();
        exit();
    }
}
?>

<form method="POST">
    Traduce "<?= $_SESSION['palabras'][$_SESSION['intentos']] ?>":
    <input type="text" name="respuesta" required>
    <button type="submit">Enviar</button>
</form>
