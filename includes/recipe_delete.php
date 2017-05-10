<?php
	
	session_start();

    require('db_connect.php');

	
	$recipe_id = $_GET['recipe_id'];

	$user_id = $_SESSION['id'];
	
	$query = "DELETE FROM favrecipes WHERE userid=$user_id AND recipeid=$recipe_id";
	$result = $mysqli->query($query);

	if ($result === TRUE) {
		echo "Recipe has been removed.";
	} else {
		echo "Error removing recipe. Please try again.";
	}

?>