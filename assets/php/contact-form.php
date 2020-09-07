<?php
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $sender_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = "jwjeff200@gmail.com";
    $email_subject = "New Email!";
    $email_body = "Name: $name.\n".
                    "Subject: $subject.\n".
                    "Email: $sender_email.\n".
                    "Message: $message. \n";

    $to = "wangw115@mcmaster.ca";
    $headers = "From $email_from \r\n";
    $headers .= "Reply-To: $sender_email \r\n";

    mail($to, $email_subject, $email_body, $headers);
    header("Location: index.html");
?>