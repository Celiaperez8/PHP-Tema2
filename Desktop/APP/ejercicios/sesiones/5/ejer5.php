<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['color'])) {
    $color = $_POST['color'];
    setcookie('color', $color, time() + 3600, '/'); // Asegúrate de que la cookie sea accesible globalmente
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}

$color_fondo = isset($_COOKIE['color']) ? $_COOKIE['color'] : 'white'; // Color por defecto es blanco
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color de Fondo</title>
</head>
<body style="background-color: <?php echo htmlspecialchars($color_fondo); ?>;">
    <form method="POST">
        <label for="color">Elige el color de fondo: </label>
        <input type="color" id="color" name="color" value="<?php echo htmlspecialchars($color_fondo); ?>">
        <button type="submit">Cambiar color</button>
    </form>
</body>
</html>

