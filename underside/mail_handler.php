<?php
use PHPMailer\PHPMailer\PHPMailer;
​
require 'vendor/autoload.php';
​
  if(isset($_POST['submit'])){
        $email=$_POST['email'];
        $name=$_POST['name'];
        $department=$_POST['department'];
        $terms=$_POST['terms'];
        $country=$_POST['country'];
        $to = 'po@somedaybusiness.com';

        if($country == 'norway') {
            $to = 'knut.Martinsen@basf.com';
        }
        else if($country == 'sweden'){ 
            $to = 'knut.martinsen@basf.com'; 
        }
        else if($country == 'finland'){
            $to = 'taija.vettenranta-tuomimaki@basf.com'; 
        }
        else if($country == 'denmark'){
            $to = 'jeanette.hansen@basf.com'; 
        }
        else if($country == 'baltic'){
            $to = 'marjut.makelainen@basf.com'; 
        };
​
        $subject='New employee Someday Onboarding';
        $headers="From: ".$to;
        $message="Please register this user and connect with correct department leader,"."\n". "Name: ".$name."\n"."e-mail: ".$email."\n"."Department: ".$department."\n"."Terms: ".$terms."\n"."Country: ".$country;
        // echo $to; exit();
        $mail = new PHPMailer;
        
        $mail->isSMTP();                                      // Set mailer to use SMTP
  /*      $mail->Host = 'smtp.domeneshop.no';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'somedayapp16';                 // SMTP username
        $mail->Password = 'dg.-*H4g';                           // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to
*/
​
        $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'support@someday-app.com';                 // SMTP username
        $mail->Password = '9pcGfZ8pXegAAY8A';                           // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;  
​
        $mail->From = 'support@someday-app.com';
        $mail->FromName = 'Someday';
        $mail->addAddress($to); 
        $mail->Subject = $subject;
        $mail->Body    = $message;
        if(!$mail->send()) {
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            echo 'Message has been sent';
        }        
        // mail($to, $subject, $message, $headers ) or die("Something went wrong!");
        // echo "<h1>Sent succesfully! We will contact you shortly.</h1>";
​
    };
?>

