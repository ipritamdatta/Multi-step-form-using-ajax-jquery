<?php
$conn = mysqli_connect("localhost","root","","test");



echo 'processing... ';
//fname, lname,email,phone,dd,nn,yyyy,uname,pword
if(isset($_POST['fname']) && $_POST['lname'] && $_POST['email'] && $_POST['phone'] && $_POST['dd'] 
 && $_POST['nn'] && $_POST['yyyy'] && $_POST['uname'] && $_POST['pword']){
    $fname  = $_POST['fname'];
    $lname  = $_POST['lname'];
    $email  = $_POST['email'];
    $phone  = $_POST['phone'];
    $dd     = $_POST['dd'];
    $nn     = $_POST['nn'];
    $yyyy   = $_POST['yyyy'];
    $uname  = $_POST['uname'];
    $pword   = $_POST['pword'];

    $query = "INSERT INTO `users`(`fname`, `lname`, `email`, `phone`, `dd`, `nn`, `yyyy`, `uname`, `pword`) VALUES ('$fname','$lname','$email','$phone','$dd','$nn','$yyyy','$uname','$pword')";
    
    if(mysqli_query($conn,$query)){
        echo "User Added";
    }else{
        echo "ERROR: ".mysqli_error($conn);
    }
    // echo "POST: Your name is ".$_POST['fname'].' Last name: '.$_POST['lname'];
}




