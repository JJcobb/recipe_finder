<?php

    $user_id = $_SESSION['id'];

    $recipe_id = $_GET['id'];

    //only display the button if they are logged in
    if( $_SESSION['loggedin'] == 'true' ){

    	$query = "SELECT * FROM favrecipes WHERE userid = '$user_id' AND recipeid = '$recipe_id'";

    	$result = $mysqli->query($query);

    	//if user has not added this recipe as a favorite
    	if(mysqli_num_rows($result) == 0){

			echo '<a class="btn-floating btn-large waves-effect waves-light green lighten-1" id="favorite" style="display:inline-block;margin-left: 1.25em;"><i class="material-icons">star</i></a>';
		}
		//if it already has been added as a favorite, disable the button
		else {

			echo '<a class="disabled btn-floating btn-large waves-effect waves-light green lighten-1" id="favorite" style="display:inline-block;margin-left: 1.25em;"><i class="material-icons">star</i></a>';

		}

	}


?>