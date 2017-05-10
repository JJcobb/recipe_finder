<?php

    session_start();

    require('db_connect.php');
    

    $recipe_id = $_POST['recipe_id'];

    $user_id = $_SESSION['id'];


    //Check if recipe has already been favorited
    $checkquery = "SELECT * FROM favrecipes WHERE userid=$user_id AND recipeid=$recipe_id";

    $checkresult = $mysqli->query($checkquery);

    if (mysqli_num_rows($checkresult) == 0){ 

        //Recipe has not been favorited yet, so it can be added

        //Add Recipe
        $addquery = "INSERT INTO favrecipes(userid, recipeid)
                     VALUES ('".$user_id."', '".$recipe_id."')";

        $mysqli->query($addquery);

        echo "Recipe added to Favorites";
    }
    else{
        echo "This recipe is already in your Favorites";
    }



?>