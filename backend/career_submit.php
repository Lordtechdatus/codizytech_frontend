<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

require_once "db_connection.php";  // contains $conn

// Get inputs
$fullName  = $_POST['fullName'] ?? null;
$email     = $_POST['email'] ?? null;
$contact   = $_POST['contact'] ?? null;
$position  = $_POST['position'] ?? null;
$message   = $_POST['message'] ?? null;

if (!$fullName || !$email || !$position) {
    echo json_encode(["status" => "error", "message" => "Missing required fields"]);
    exit;
}


// --------------------------
//  RESUME UPLOAD
// --------------------------
$resumePath = "";
if (isset($_FILES['resume'])) {

    $targetDir = "uploads/";
    if (!file_exists($targetDir)) {
        mkdir($targetDir, 0777, true);
    }

    $fileName = time() . "_" . basename($_FILES["resume"]["name"]);
    $targetFile = $targetDir . $fileName;

    if (move_uploaded_file($_FILES["resume"]["tmp_name"], $targetFile)) {
        $resumePath = $targetFile;
    } else {
        echo json_encode(["status" => "error", "message" => "Resume upload failed"]);
        exit;
    }
}


// --------------------------
//  INSERT INTO DATABASE
// --------------------------
$stmt = $conn->prepare("
    INSERT INTO career_applications 
    (full_name, email, contact_number, position, resume_path, message)
    VALUES (?, ?, ?, ?, ?, ?)
");

$stmt->bind_param("ssssss", $fullName, $email, $contact, $position, $resumePath, $message);

if (!$stmt->execute()) {
    echo json_encode(["status" => "error", "message" => $stmt->error]);
    exit;
}


// --------------------------
//  SEND EMAIL TO ADMIN
// --------------------------
$adminEmail = "pushpendrac081@gmail.com";
$subject = "New Career Application – " . $position;

// Email message
$body  = "New Career Application Received\n\n";
$body .= "Name: $fullName\n";
$body .= "Email: $email\n";
$body .= "Contact: $contact\n";
$body .= "Position: $position\n";
$body .= "Message:\n$message\n";
$body .= "\nResume attached below.\n";

// Generate boundary
$boundary = md5(time());

// Headers
$headers = "From: no-reply@codizytech.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"".$boundary."\"\r\n";

// Build email body with attachment
$emailBody  = "--$boundary\r\n";
$emailBody .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
$emailBody .= $body . "\r\n";

// Attach file
$fileContent = chunk_split(base64_encode(file_get_contents($resumePath)));
$emailBody .= "--$boundary\r\n";
$emailBody .= "Content-Type: application/octet-stream; name=\"" . basename($resumePath) . "\"\r\n";
$emailBody .= "Content-Disposition: attachment; filename=\"" . basename($resumePath) . "\"\r\n";
$emailBody .= "Content-Transfer-Encoding: base64\r\n\r\n";
$emailBody .= $fileContent . "\r\n";
$emailBody .= "--$boundary--";

// Send email
@mail($adminEmail, $subject, $emailBody, $headers);


// --------------------------
//  SUCCESS RESPONSE
// --------------------------
echo json_encode(["status" => "success", "message" => "Application submitted successfully"]);

?>
