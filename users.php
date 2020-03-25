<?php
$conn = mysqli_connect("localhost","root","","test");


$getdata_query = "SELECT * FROM users";

$showresult = mysqli_query($conn,$getdata_query);
$users = mysqli_fetch_all($showresult,MYSQLI_ASSOC);

echo json_encode($users);