<?php

// Set the name of the cookie that will store the unique visitor ID
$cookie_name = "visitor_id";

// Check if the visitor has a cookie with a unique ID
if (!isset($_COOKIE[$cookie_name])) {

    // If the visitor does not have a cookie, generate a new unique ID
    $visitor_id = uniqid();

    // Set the cookie with the unique ID, and make it expire in 30 days
    setcookie($cookie_name, $visitor_id, time() + (30 * 24 * 60 * 60), "/");

    // Increment the counter of unique visitors
    $file_name = "visitor_count.txt";
    $file = fopen($file_name, "r+");
    flock($file, LOCK_EX);
    $count = intval(fgets($file)) + 1;
   
    rewind($file); ftruncate($file, 0);
    fwrite($file, $count);
    fflush($file);
    flock($file, LOCK_UN);
    fclose($file);

} else {

    // If the visitor has a cookie, do not increment the counter
    $visitor_id = $_COOKIE[$cookie_name];

}

// Display the counter of unique visitors
$file_name = "visitor_count.txt";


$file = fopen($file_name, "r");
if ($file) {
    $line = fgets($file);
    if ($line !== false) {
        $count = intval($line);
    } else {
        echo "Error: could not read first line of file";
    }
    fclose($file);
} else {
    echo "Error: could not open file";
}

echo "Number of unique visitors: " . $count;


?>