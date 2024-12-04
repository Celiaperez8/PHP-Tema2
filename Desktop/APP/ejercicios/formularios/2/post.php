<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado de la Conversión</title>
</head>
<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $euros = $_POST["euros"];
        $pesetas = $euros * 166.386;
        echo "<h1>Resultado:</h1>";
        echo "<p>$euros euros son equivalentes a <strong>" . number_format($pesetas, 2) . "</strong> pesetas.</p>";
    } else {
        echo "<p>No se enviaron datos.</p>";
    }
    ?>
    <a href="index.php">Volver al conversor</a>
</body>
</html>
