<?php
// Nombre de usuario y contraseña almacenados en cookies
setcookie('usuario', 'admin', time() + 3600);
setcookie('password', '1234', time() + 3600);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = $_POST['usuario'];
    $password = $_POST['password'];

    if ($usuario === $_COOKIE['usuario'] && $password === $_COOKIE['password']) {
        echo "Acceso concedido. <a href='programa.php'>Ir al programa</a>";
    } else {
        echo "Acceso denegado. Intente de nuevo.";
    }
}
?>

<form method="POST">
    Usuario: <input type="text" name="usuario" required>
    Contraseña: <input type="password" name="password" required>
    <button type="submit">Iniciar sesión</button>
</form>
