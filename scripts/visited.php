<?php

    echo ("SCRIPT EXECTURED");
    $counterFile = "/counter.txt"; // path to the text file where you want to store the counter value

    // check if the counter file exists, and create it if it doesn't
    if (!file_exists($counterFile)) {
        $handle = fopen($counterFile, "w");
        fwrite($handle, "0");
        fclose($handle);
    }

    // read the current counter value from the file
    $counter = file_get_contents($counterFile);

    // increment the counter and update the file
    $counter++;
    $handle = fopen($counterFile, "w");
    fwrite($handle, $counter);
    fclose($handle);

    // output the counter value to the user
    echo "You are visitor number $counter to this website.";
    echo realpath($counterFile);

?>