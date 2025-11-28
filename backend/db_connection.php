<?php
$host = "localhost";       // Database Host
$user = "codizytech_user";            // Database Username
$pass = "pushtech@123";                // Database Password
$db   = "codizytechdata";   // Database Name

$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die(json_encode([
        "status" => "error",
        "message" => "Database connection failed: " . $conn->connect_error
    ]));
}
?>
