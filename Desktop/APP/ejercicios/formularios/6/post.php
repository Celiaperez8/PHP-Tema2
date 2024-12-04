<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado del Área</title>
</head>
<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $base = $_POST["base"];
        $altura = $_POST["altura"];
        $area = $base * $altura;
        echo "<h1>Resultado:</h1>";
        echo "<p>El área del rectángulo es: <strong>$area metros cuadrados</strong>.</p>";
    } else {
        echo "<p>No se enviaron datos.</p>";
    }
    ?>
    <a href="index.php">Volver</a>
</body>
</html>