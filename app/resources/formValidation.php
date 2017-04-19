<?php
// define variables and set to empty values
$nameErr = $phoneErr = $selectErr = $messageErr = "";
$name = $phone = $select = $message = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST("name"))){
  	$nameErr = "Введите ваше имя";
  } else {
  	$name = test_input($_POST["name"]);
  	if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $nameErr = "Только буквы и пробелы"; 
    }
  }

  if (empty($_POST("$phone"))){
  	$phoneErr = "Введите номер телефона";
  } else {
	  $phone = test_input($_POST["phone"]);
  }

  if (empty($_POST("$select"))){
  	$selectErr = "Выберите тему сообщения";
  } else {
	  $select = test_input($_POST["select"]);
  }

  if (empty($_POST("$message"))){
  	$messageErr = "Напишите нам что-нибудь";
  } else {
	  $message = test_input($_POST["message"]);
  }
}
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
