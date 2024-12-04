<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Multiplicación</title>
</head>
<body>
    <h1>Multiplicación de dos números</h1>
    <form action="post.php" method="post">
        <label for="num1">Introduce el primer número:</label>
        <input type="number" id="num1" name="num1" required><br><br>
        
        <label for="num2">Introduce el segundo número:</label>
        <input type="number" id="num2" name="num2" required><br><br>
        
        <button type="submit">Calcular</button>
    </form>
</body>
</html>
