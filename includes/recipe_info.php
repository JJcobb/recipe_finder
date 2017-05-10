<?php

	require_once 'unirest-php/src/Unirest.php';


	$recipe_query = $_GET['recipe_query'];

	if( isset($_GET['cuisine']) ) {
		$cuisine = "&cuisine=".$_GET['cuisine'];
	}
	else {
		$cuisine = "";
	}

	if( isset($_GET['intolerances']) ) {
		$intolerances = "&intolerances=".$_GET['intolerances'];
	}
	else {
		$intolerances = "";
	}



	$response = Unirest\Request::get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true".$cuisine."&fillIngredients=true&instructionsRequired=true".$intolerances."&limitLicense=false&number=20&offset=0&query=".$recipe_query."&ranking=1",
  array(
    "X-Mashape-Key" => "NTsfXpBuNlmshJnznqrZf8t26vfWp1ppE36jsntFhT89hDNTZn",
    "Accept" => "application/json"
  )
);


	echo $response->raw_body;


?>