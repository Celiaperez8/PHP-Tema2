<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado de Operaciones</title>
</head>
<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $num1 = $_POST["num1"];
        $num2 = $_POST["num2"];
        echo "<h1>Resultados:</h1>";
        echo "<p>Suma: " . ($num1 + $num2) . "</p>";
        echo "<p>Resta: " . ($num1 - $num2) . "</p>";
        echo "<p>Multiplicación: " . ($num1 * $num2) . "</p>";
        echo "<p>División: " . ($num2 != 0 ? $num1 / $num2 : "No se puede dividir entre 0") . "</p>";
    } else {
        echo "<p>No se enviaron datos.</p>";
    }
    ?>
    <a href="index.php">Volver a la calculadora</a>
</body>
</html>
