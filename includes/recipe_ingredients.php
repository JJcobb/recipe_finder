<?php

	require_once 'unirest-php/src/Unirest.php';


	$recipe_id = $_GET['recipe_id'];


	$response = Unirest\Request::get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/".$recipe_id."/information?includeNutrition=false",
  array(
    "X-Mashape-Key" => "NTsfXpBuNlmshJnznqrZf8t26vfWp1ppE36jsntFhT89hDNTZn",
    "Accept" => "application/json"
  )
);




	echo $response->raw_body;


?>