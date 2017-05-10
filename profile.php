	<?php
		include('includes/db_connect.php');
		include('includes/session_start.php');

		if( $_SESSION['loggedin'] == 'false' ){
			header('Location: index.php');
			//header("location:javascript://history.go(-1)");
		}
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
	
	<!--  --------------------------------------------------------Navigation----------------------------------------------------------------  -->
	<?php
		include('includes/header.php');
	?>
	<!--  ---------------------------------------------------------End Navigation------------------------------------------------------------  -->
	 
	  
	  
	<div class="profilePage"> <!--  -------------------------------------------Profile Page----------------------------------------------------------  -->

	<h3 class="h3">Favorite Recipes</h3>
		
		<div class="container">

		  	<div class="row">

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
	</div> <!--  ---------------------------------------------------------End Profile Page------------------------------------------------------------  -->
	  

	  <!-- Handlebars -->
	  <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.6/handlebars.min.js"></script>
	  
	  <script src="js/profile_page.js"></script>
	  <script src="js/otherScripts.js"></script>
	  <script src="js/scripts.js"></script>
	  
	</body>
  </html>