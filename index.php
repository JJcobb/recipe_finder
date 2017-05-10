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

	<!--  ----------------------------------------------------------End Navigation/Forms------------------------------------------------------ -->
		  
		
		
	
	<!--  ----------------------------------------------------------Home Page---------------------------------------------------------------  -->
	  <div class="homePage"> 
	   <div class="slider homePageImg">
		<ul class="slides">
		  <li>
			<img class="homePageImg" src="img/banner-img1.jpg">
		  </li>
		  <li>
			<img class="homePageImg" src="img/banner-img2.jpg">
		  </li>
		  <li>
			<img class="homePageImg" src="img/banner-img3.jpg">
		  </li>
		  <li>
			<img class="homePageImg" src="img/banner-img4.jpg">
		  </li>
		</ul>
	  </div>
		  <div class="headerText center-align col s12">
			<h1 class="h1 col s6 offset-s3">Let's Get Cookin'</h1>
		  </div>
		  <form class="col s12 searchform" action=""><!--only scrolls down when you click search button not on submission/enter-->
			  <div class="row">
				<div class="input-field col s4 offset-s4 valign-wrapper">
				  <input placeholder="Search Recipes" id="searchInput" type="text" class="search">
				  <button href="#recipes" id="searchBtn" type="submit"><i class="material-icons" id="searchIcon" >search</i></button>
				</div>
			  </div>
		  </form>
	  </div> 
	<!--  ---------------------------------------------------------End Home Page-----------------------------------------------------------  -->
	  
	  
	  
	  
	<!--  ---------------------------------------------------------Start Recipe Section----------------------------------------------------  -->  
	  <nav id="filters">
		<ul>
			<li><a class="filter_btn active" id="20minutes" href="">Quick Recipes</a></li>
			<li><a class="filter_btn" id="appetizers" href="">Appetizers</a></li>
			<li><a class="filter_btn" id="entrees" href="">Entr&eacute;es</a></li>
			<li><a class="filter_btn" id="desserts" href="">Desserts</a></li>
		</ul>
	  </nav>
	  <div id="recipes"><!--This is where all the recipes will be after searching might be good to also include default recipes that display if the user does not search and just scrolls down-->

	  	<div class="container">

		  	<div class="row">

		  		<div class="col s12 center-align">
		  			<h4 id="recipe-query"></h4>
		  		</div>	

		  		<div id="loading">
		  		</div>



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



		  		<div id="recipe-cards">
		  		</div>

		  	</div>

	    </div>
	
	  </div> 
	<!--  ---------------------------------------------------------End Recipes Section-----------------------------------------------------  -->

	  <!-- Handlebars -->
	  <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.6/handlebars.min.js"></script>

	  <script src="js/otherScripts.js"></script>
	  <script src="js/scripts.js"></script>
	  <script src="js/filter_recipes.js"></script>
	  
	  
	</body>
  </html>