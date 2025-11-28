<?php
header("Content-Type: application/json");

// SIMPLE RESPONSE (backend working)
$response = [
    "backend_status" => "running",
    "php_version" => phpversion()
];

// TRY DATABASE CONNECTION
try {
    $host = "localhost";        
    $user = "codizytech_user";     
    $pass = "pushtech@123"; 
    $db   = "codizytechdata";

    $conn = new mysqli($host, $user, $pass, $db);

    if ($conn->connect_error) {
        $response["database"] = "connection_failed";
        $response["db_error"] = $conn->connect_error;
    } else {
        $response["database"] = "connected";
    }
} catch (Exception $e) {
    $response["database"] = "connection_failed";
    $response["db_error"] = $e->getMessage();
}

echo json_encode($response, JSON_PRETTY_PRINT);
?>
