	<?php
		include('includes/db_connect.php');
		include('includes/session_start.php');
	?>
<!DOCTYPE html>
<html>
  <head>
	<link rel="icon" type="ico" href="">
    <title></title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
      <!--Import Google Icon Font-->
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import Fonts-->
	  <link href="https://fonts.googleapis.com/css?family=Nunito:900|Paytone+One|Titan+One" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
	  <!-- Main Css -->
	  <link type="text/css" rel="stylesheet" href="css/style.css">

      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    </head>

    <body>
      <!--Import jQuery before materialize.js-->
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script type="text/javascript" src="js/materialize.min.js"></script>
	
	

	<!--  --------------------------------------------------------Navigation/Forms---------------------------------------------------------------  -->
	<?php
		include('includes/header.php');
	?>

	<!--  ----------------------------------------------------------End Navigation/Forms------------------------------------------------------  -->
	  
	<div class="container">


	  <div class="row">

	  	<div class="col s12 center-align">
	  		<h2 id="recipe-name" style="display:inline-block;vertical-align:middle"></h2>

	  		<!-- Favorite Button -->
	  		<?php
	  			include('includes/favorite_button_display.php');
  			?>
	  		<!-- END favorite button -->

	  	</div>

	  	<div class="col s12 center-align">
	  		<div class="section">
		  		<img src="" class="responsive-img z-depth-3" id="recipe-image">
		  	</div>
	  	</div>  

	  	<div class="col s12 center-align" id="recipe-chips"></div>	

	  </div>


	</div>


	<div class="container">


		<div class="row">

		    <div class="col s12">
		      <ul class="tabs tabs-fixed-width">
		      	<li class="tab col s3"><a class="active green-text lighten-2" href="#summary-container">Summary</a></li>
		        <li class="tab col s3"><a class="green-text lighten-2" href="#ingredient-container">Ingredients</a></li>
		        <li class="tab col s3"><a class="green-text lighten-2" href="#instruction-container">Directions</a></li>
		      </ul>
		    </div>


		    <div id="summary-container" class="col s12"></div>


		    <div id="instruction-container" class="col s12">

		  		<ul class="collection" id="instruction-list">

			  		<li class="collection-header section center-align green lighten-2 white-text" style="font-weight:bold;">

			  			<!-- <h4 style="display:inline-block;">Directions</h4> -->
			  			<span id="ready-in"></span>

			  		</li>

				    <!-- Direction list items -->

				</ul>

		  	</div>

		    <div id="ingredient-container" class="col s12">

		  		<ul class="collection" id="ingredient-list">

			  		<li class="collection-header section center-align green lighten-2 white-text" style="font-weight:bold;">

			  				<span id="serving-amount">8</span> Servings | <span id="calories"></span> Calories
			  				<!-- Servings could be updated with AJAX, then the amounts shown below will also update -->

			  		</li>

				    <!-- Ingredient list items -->

				</ul>

		  	</div>


		</div>


		<!-- old layout here -->
		
	</div>



	  <div class="container">

	  	<div class="row" id="recipe-cards">



	  		<!-- Handlebars -->
	  		<script id="card-template" type="text/x-handlebars-template">

	  			{{#each recipe_cards}}
				  	<div class="col s12 m4">
				      	<div class="card sticky-action" style="overflow: hidden;">

				        	<div class="card-image waves-effect waves-block waves-light" style="height:200px">
				         		<img class="activator" style="object-fit: cover; height: 100%;" src="{{image}}">
				          	</div>

				          	<div class="card-content" style="height: 100px;overflow-y:auto;">
				            	<span class="card-title activator grey-text text-darken-4" style="line-height: 1.25;">{{name}}<i class="material-icons right">more_vert</i></span>
				          	</div>

				          	<div class="card-action">
				                <a class="green-text lighten-2" href="recipe.php?id={{id}}">Get Cookin&rsquo;</a>
				            </div>

				        	<div class="card-reveal" style="display: none; transform: translateY(0px);">
				            	<span class="card-title grey-text text-darken-4" style="line-height: 1.25;">{{name}}<i class="material-icons right">close</i></span>
				            	<p>Ready in: {{time}} minutes</p>
				            	<p class="summary">{{summary}}</p>
				            </div>

				      	</div>
				    </div>
			    {{/each}}

		    </script>
		    <!-- END Handlebars -->



	  		<div class="col s12 center-align">
	  			<h4>Related Recipes</h4>
	  		</div>

	  		<!-- Related recipe cards -->

	  	</div>

	  </div>


	   <!-- Handlebars -->
	  <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.6/handlebars.min.js"></script>


	  <script src="js/url-search-params.js"></script>

	  <script src="js/otherScripts.js"></script>

	  <script src="js/scripts.js"></script>

	  <script src="js/recipe_page.js"></script>

	</body>
  </html>