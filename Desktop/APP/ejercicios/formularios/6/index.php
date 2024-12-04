<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Área del Rectángulo</title>
</head>
<body>
    <h1>Calcular el Área de un Rectángulo</h1>
    <form action="post.php" method="post">
        <label for="base">Base del rectángulo (en metros):</label>
        <input type="number" id="base" name="base" step="0.01" required><br><br>
        <label for="altura">Altura del rectángulo (en metros):</label>
        <input type="number" id="altura" name="altura" step="0.01" required><br><br>
        <button type="submit">Calcular</button>
    </form>
</body>
</html>
