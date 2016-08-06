<?php

$myemail = "mail@2dit.ru";
$user_name = htmlspecialchars($_POST["name"]);
$user_phone = htmlspecialchars($_POST["email"]);
$ext_my_email = htmlspecialchars($_POST["phone"]);
$mess = htmlspecialchars($_POST["message"]);
echo "wewewe".$user_name;
$tema ="Заявка с сайта 2dit";
$message_to_myemail = "Здравствуйте! <br>
Вашей контактной формой было отправлено сообщение! <br>
Имя отправителя: $user_name <br> 
Сообщение: $user_phone <br>
Mail: $ext_my_email";
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: $myemail \r\n";
//$headers .= "Cc: studio.2dit@yandex.ru\r\n";
/* Отправляем сообщение, используя mail() функцию */

mail($myemail, $tema, $message_to_myemail, $headers);


//echo "Привет " . $user_name . "!" . "Мы Вам перезвоним по номеру: " . $user_phone;


?>