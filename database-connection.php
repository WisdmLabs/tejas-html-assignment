<?php
$servername = "localhost";
$username = "tejas";
$password = "Tej@s";
$database = "php";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Database Connection Error: " . $conn->connect_error);
}
?>
