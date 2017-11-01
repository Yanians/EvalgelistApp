<?php
mysql_connect("localhost","root","");
mysql_select_db("reg");

if(isset($_POST['id'])){
  $fullname = mysql_real_escape_string(($_POST['full_name']));
  $religion = mysql_real_escape_string(($_POST['religion']));
  $country = mysql_real_escape_string(($_POST['country']));
  $email = mysql_real_escape_string(($_POST['email']));
  $contact = mysql_real_escape_string(($_POST['contact']));
  $password = mysql_real_escape_string(($_POST['password']));

  mysql_query("INSERT INTO users_reg(full_name,religion,country,email,contact,password)VALUES('{$fullname}','{$religion}','{$country}','{$email}','{$contact}','{$password}')");
  exit();
}

   ?>


