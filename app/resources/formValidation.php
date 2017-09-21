<?php
// define variables and set to empty values
$nameErr = $phoneErr = $selectErr = $messageErr = "";
$name = $phone = $select = $message = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $phone = test_input($_POST["phone"]);
  $select = test_input($_POST["select"]);
  $message = test_input($_POST["message"]);
  }
//$address = "example@themeforest.net";
$address = "r.savko@gmail.com";


// Configuration option.
// i.e. The standard subject will appear as, "You've been contacted by John Doe."

// Example, $e_subject = '$name . ' has contacted you via Your Website.';

$e_subject = 'You\'ve been contacted by ' . $name . '.';


// Configuration option.
// You can change this if you feel that you need to.
// Developers, you may wish to add more fields to the form, in which case you must be sure to add them here.

$e_body = "Пользователь $name прислал сообщение с темой $select, читай его ниже:" . PHP_EOL . PHP_EOL;
$e_content = "\"$message\"" . PHP_EOL . PHP_EOL;
$e_reply = "Ответить можно позвонив $phone";

$msg = wordwrap( $e_body . $e_content . $e_reply, 70 );

$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

if(mail($address, $e_subject, $msg, $headers)) {

	// Email has sent successfully, echo a success page.

	echo "<div id='success_page'>";
	echo "<h4>Сообщение успешно отправлено!</h4>";
	echo "<p>Благодарю вас,&nbsp;<strong>$name</strong>, &nbsp;я обязательно прочту ваше сообщение.</p>";
	echo "</div>";


} else {

	echo 'ERROR!';

}
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//   if (empty($_POST("$name"))){
//   	$nameErr = "Введите ваше имя";
//   } else {
//   	$name = test_input($_POST["name"]);
//   	if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
//       $nameErr = "Только буквы и пробелы"; 
//     }
//   }
// 
//   if (empty($_POST("$phone"))){
//   	$phoneErr = "Введите номер телефона";
//   } else {
// 	  $phone = test_input($_POST["phone"]);
//   }
// 
//   if (empty($_POST("$select"))){
//   	$selectErr = "Выберите тему сообщения";
//   } else {
// 	  $select = test_input($_POST["select"]);
//   }
// 
//   if (empty($_POST("$message"))){
//   	$messageErr = "Напишите нам что-нибудь";
//   } else {
// 	  $message = test_input($_POST["message"]);
//   }
// }
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
