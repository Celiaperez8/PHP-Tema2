<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado de la Multiplicación</title>
</head>
<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $num1 = $_POST["num1"];
        $num2 = $_POST["num2"];

        $resultado = $num1 * $num2;

        echo "<h1>Resultado:</h1>";
        echo "<p>El resultado de la multiplicación de $num1 y $num2 es: <strong>$resultado</strong></p>";
    } else {
        echo "<p>No se enviaron datos.</p>";
    }
    ?>
    <a href="index.php">Volver al formulario</a>
</body>
</html>
