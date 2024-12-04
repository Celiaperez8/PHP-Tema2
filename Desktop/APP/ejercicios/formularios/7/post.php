<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado del Salario</title>
</head>
<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $horas = $_POST["horas"];
        $salario_por_hora = 12;
        $salario_semanal = $horas * $salario_por_hora;
        echo "<h1>Resultado:</h1>";
        echo "<p>Horas trabajadas: <strong>$horas</strong>.</p>";
        echo "<p>El salario semanal es: <strong>" . number_format($salario_semanal, 2) . " €</strong>.</p>";
    } else {
        echo "<p>No se enviaron datos.</p>";
    }
    ?>
    <a href="index.php">Volver</a>
</body>
</html>
