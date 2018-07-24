<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
/*
Tested working with PHP5.4 and above (including PHP 7 )

 */
require_once './vendor/autoload.php';

use FormGuide\Handlx\FormHandler;


$pp = new FormHandler(); 

$validator = $pp->getValidator();
$validator->fields(['firstname','lastname', 'email','phone'])->areRequired()->maxLength(50);
$validator->field('email')->isEmail();
$validator->field('message')->maxLength(6000);


$pp->attachFiles(['image']);

$pp->requireReCaptcha();
$pp->getReCaptcha()->initSecretKey('6LdHMF0UAAAAAJOWbnIEdIpJt01jNSZcvzl5yl7U');


$pp->sendEmailTo('notice@etucker.net'); // ← Your email here

$mailer = $pp->getMailer();
$mailer->setFrom('notice@etucker.net','Form Submission from eTucker.net',false);



echo $pp->process($_POST);