<?php
$quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "It is never too late to be what you might have been. - George Eliot",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb"
];

$random_index = array_rand($quotes);
echo $quotes[$random_index];
?>
