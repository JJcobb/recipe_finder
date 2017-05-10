<?php
    session_start();

    require('db_connect.php');

    // UserName
    $username = filter_var($_POST['username'], FILTER_SANITIZE_STRING);


    // Password
    $password = filter_var($_POST['password'], FILTER_SANITIZE_STRING);



    $query = "SELECT * FROM users WHERE username='$username' and password='$password'";

    $result = $mysqli->query($query);

    if (mysqli_num_rows($result) == 0){ 

        $loginError = "Incorrect Username or Password";

        echo "$loginError";

    }
    else{

        while($row = $result->fetch_assoc()) { 
            $id = $row['id'];
        }

        $_SESSION['loggedin'] = 'true';
        $_SESSION['id'] = $id;

        $loginSuccess = "Signed In";

        echo "$loginSuccess";
    }

    

?>