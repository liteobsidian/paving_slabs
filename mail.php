<?php

$_POST = json_decode(file_get_contents('php://input'), true);

$name = $_POST['user_name'];
$phone = $_POST['telephone'];
$item = $_POST['user_item'];

$to = 'liteobsidian@gmail.com';
$subject = 'Заявка с сайта "Топ-тротуар"';
$message = "Имя: $name, Номер: $phone, Нужно: $item";

$success = mail($to,$subject,$message,'From: goodcode@trywrap.ru');

if (!$success) {
    console_log('error'); 
}
else {
    echo "succeful";
}
?>