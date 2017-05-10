<?

	session_start();

    require('db_connect.php');


	//Get User ID from Session variable. The session variable should be set after the user logs in	
	$user_id = $_SESSION['id'];


	//construct query for database. Get the recipeid's from the favrecipes table where the userid column is equal to the value of the user id session variable
	$query = "SELECT recipeid FROM favrecipes WHERE userid = $user_id";


	//query the database and store the result in a variable
	$result = $mysqli->query($query);


	//make string variable to store comma-separated list of recipe ids that are retrieved from the database query
	$recipe_ids = "";


	//loop through the results of the query to make comma-separated list of recipe IDs to send to the API
	while( $row = $result->fetch_object() ){

		//add the current result to the string
		$recipe_ids .= (string) $row->recipeid;

		//add a comma after the id is added above
		$recipe_ids .= ",";
	}


	//remove last comma at end of recipe id string
	rtrim($recipe_ids, ',');



	//************ FOR TESTING ONLY **************
	//If the session is not set up and the database connection not set up, comment out all above lines for testing purposes
	//$recipe_ids = "373862,531904,372151";
	//This is what the string could look like after retrieving the recipe ids from the database



	//Make call to API
	require_once 'unirest-php/src/Unirest.php';

	$response = Unirest\Request::get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/informationBulk?ids=".$recipe_ids."&includeNutrition=false",
	  array(
	    "X-Mashape-Key" => "NTsfXpBuNlmshJnznqrZf8t26vfWp1ppE36jsntFhT89hDNTZn",
	    "Accept" => "application/json"
	  )
	);


	//This is the JSON that is returned to the profile_page.js file | From there, the GetJSON AJAX call displays the recipe info on the page
	echo $response->raw_body;

?>