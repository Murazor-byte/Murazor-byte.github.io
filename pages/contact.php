<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "Sending Email";
    $to = "dafluffman44@gmail.com";
    $subject = "Feedback Submission";

    $message = "Feedback message: " . $_POST["feedback_message"] . "\n\n";
    $message .= "Rating: " . $_POST["rating"] . "\n\n";
    $message .= "Email: " . $_POST["email"];

    $headers = "From: MAMP@example.com" . "\r\n" .
        "Reply-To: MAMP@example.com" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    echo "Message Is Set";
    mail($to, $subject, $message, $headers);

    echo "Sent email";
}
else{
    echo "Request method isn't post";
}
?>