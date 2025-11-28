<?php
ini_set('display_errors', 0);
error_reporting(0);


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

require_once "db_connection.php";  // contains $conn

// Get form values safely
$name    = $_POST['name']    ?? "";
$email   = $_POST['email']   ?? "";
$mobile  = $_POST['mobile']  ?? "";
$message = $_POST['message'] ?? "";

// Basic validation
if ($name == "" || $email == "" || $mobile == "" || $message == "") {
    echo json_encode([
        "status" => "error",
        "message" => "Please fill all required fields."
    ]);
    exit;
}

// 1️⃣  SAVE TO DATABASE (secure prepared stmt)


$stmt = $conn->prepare("INSERT INTO contact_messages (name, email, mobile, message) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $mobile, $message);

$dbSuccess = $stmt->execute();
$stmt->close();


// 2️⃣  SEND EMAIL NOTIFICATION TO ADMIN


$to      = "pushpendrac081@gmail.com";  
$subject = "New Contact Enquiry from $name";

$body  = "You received a new enquiry:\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Mobile: $mobile\n\n";
$body .= "Message:\n$message\n";

$headers  = "From: no-reply@codizytech.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

@mail($to, $subject, $body, $headers);


// 3️⃣  JSON RESPONSE


if ($dbSuccess) {
    echo json_encode([
        "status" => "success",
        "message" => "Message sent successfully!"
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Database error. Please try again."
    ]);
}

$conn->close();
?>
