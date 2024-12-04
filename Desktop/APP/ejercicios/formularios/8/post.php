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
        $mb = $_POST["mb"];
        $kb = $mb * 1024;
        echo "<h1>Resultado:</h1>";
        echo "<p>$mb Mb son equivalentes a <strong>$kb Kb</strong>.</p>";
    } else {
        echo "<p>No se enviaron datos.</p>";
    }
    ?>
    <a href="index.php">Volver</a>
</body>
</html>
