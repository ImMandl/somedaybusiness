<?php
    if(isset($_POST['submit'])){
        $email=$_POST['email'];
        $navn=$_POST['navn'];
        $department=$_POST['department'];
        $terms=$_POST['terms'];
        $country=$_POST['country'];

        if($country == 'Norge') {
            $to = 'po@somedaybusiness.com';
        }
        else if($country == 'Sverige'){ 
            $to = 'jonmagne@someday-app.com'; 
        }
        else if($country == 'Finland'){
            $to = 'siniestrojr@gmail.com'; 
        }
        else if($country == 'Danmark'){
            $to = 'jonjo_joi@hotmail.com'; 
        }
        else if($country == 'Baltic'){
            $to = 'ole.reierstad@someday-app.com'; 
        }

        $subject='New employee Someday Onboarding';
        $headers="From:" .$email;
        $message="Please register this user and connect with correct department leader," ."\n". "Name: " . $navn . "\n"."e-mail: ". $email. "\n". "Department: ". $department. "\n". "Terms accepted: " .$terms;

        if(mail($to, $subject, $message, $headers )){
            echo "<h1>Sent succesfully! We will contact you shortly</h1>";
        } else{
            echo"<h1>Something went wrong!</h1>";
        }

    }
?>