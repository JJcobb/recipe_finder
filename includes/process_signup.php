<?php
    session_start();

    require('db_connect.php');

    // UserName
    $username = filter_var($_POST['username'], FILTER_SANITIZE_STRING);


    // Password
    $password = filter_var($_POST['password'], FILTER_SANITIZE_STRING);


    // Email
    $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);


    $valid = false;


    // Check for valid username and password
    if( strlen($username) < 6 ){

        $validation_error = "Username must be at least 6 characters";
    }
    else if( strlen($password) < 6 ){

        $validation_error = "Password must be at least 6 characters";
    }
    else {

        $valid = true;
    }


    // Username is valid
    if($valid){

        // Check if username already exists
        $checkquery = "SELECT * FROM users WHERE username='$username'";

        $checkresult = $mysqli->query($checkquery);



        // if there are no accounts with this username
        if (mysqli_num_rows($checkresult) == 0){ 


            //Create Account
            $createaccountquery = "INSERT INTO users(id, username, password, email)
                                    VALUES (NUll, '".$username."', '".$password."', '".$email."')";
            
            $mysqli->query($createaccountquery);



            //Sign in to newly created account
            $query = "SELECT * FROM users WHERE username='$username' and password='$password'";

            $result = $mysqli->query($query);



            if (mysqli_num_rows($result) == 0){ 

                $loginError = "Could not log in to account";

                echo "$loginError";

            }
            else{

                while($row = $result->fetch_assoc()) { 
                    $id = $row['id'];
                }

                $_SESSION['loggedin'] = 'true';
                $_SESSION['id'] = $id;

                $loginSuccess = "Signed Up";

                echo "$loginSuccess";
            }
            

        }
        else{
            echo "Username ".$username." is taken";
        }
        // END if there are no accounts with this username


    }
    else{
        //username or password was not valid
        echo "$validation_error";
    }

 

?>