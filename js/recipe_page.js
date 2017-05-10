$(function(){

	$('.indicator').addClass('green lighten-2');


	var this_recipe_id = "has not retrieved parameters from the URL";

	//Get the recipe id from the GET string at the end of the page's URL
	var urlParams = new URLSearchParams( window.location.search.slice(1) );

	console.log("urlParams: " + urlParams);

	if( urlParams.has('id') ){
		this_recipe_id = urlParams.get('id');

		console.log("inside the if has 'id'");
	}

	console.log(this_recipe_id);



	//for handlebars
	var context;



    $.getJSON('includes/recipe_info_single.php', { recipe_id: this_recipe_id }, function(data){



 		//title
 		console.log(data.title);

 		var recipe_name = data.title;

 		$('#recipe-name').text(recipe_name);



 		//image url
 		console.log(data.image)

 		var image_url = data.image;

 		$('#recipe-image').attr('src', image_url);



 		//vegetarian
 		if( data.vegetarian ){
 			$('#recipe-chips').append('<div class="chip green lighten-2 white-text">Vegetarian</div>');
 		}
 		

 		//vegan
 		if( data.vegan ){
 			$('#recipe-chips').append('<div class="chip green lighten-2 white-text">Vegan</div>');
 		}


 		//gluten free
 		if( data.glutenFree ){
 			$('#recipe-chips').append('<div class="chip green lighten-2 white-text">Gluten Free</div>');
 		}


 		//dairy free
 		if( data.dairyFree ){
 			$('#recipe-chips').append('<div class="chip green lighten-2 white-text">Dairy Free</div>');
 		}


 		//cheap
 		if( data.cheap ){
 			$('#recipe-chips').append('<div class="chip green lighten-2 white-text">Affordable</div>');
 		}



 		//servings
 		console.log("servings: " + data.servings);

 		var servings = data.servings;

 		$('#serving-amount').text(servings);


 		//calories
 		var calories = data.nutrition.nutrients[0].amount;

 		$('#calories').text(calories);


 		//ready in
 		console.log("Ready in: " + data.readyInMinutes);

 		var ready_time = data.readyInMinutes;

 		$('#ready-in').text("Ready in " + ready_time + " minutes");




 		//instructions
 		// $.each(data.results[i].analyzedInstructions[0].steps, function(j){

 		// 	console.log("Step " + data.results[i].analyzedInstructions[0].steps[j].number + ": " + data.results[i].analyzedInstructions[0].steps[j].step);
 		// });


		//Instructions  (will load after the previous JSON request is complete)
 		$.getJSON('includes/recipe_instructions.php', { recipe_id: data.id }, function(instruction_data){


			$.each(instruction_data[0].steps, function(j){

				console.log(instruction_data[0].steps[j].number + ' ' + instruction_data[0].steps[j].step);
			

				var instruction_item = '<li class="collection-item avatar">' +
				      '<strong class="circle green-text lighten-2" style="text-align:center;font-size:1.25em">'+instruction_data[0].steps[j].number+'</strong>' +
				      '<p>'+instruction_data[0].steps[j].step+'</p>' +
				    '</li>';


			    $('#instruction-list').append(instruction_item);

			});

		}).fail( function(data, textStatus, error){

			//Log errors
			console.error("getJSON failed, status: " + textStatus + ", error: " + error);

		});
		// END JSON



 		var recipe_summary = "blank";

 		var similar_recipes = [];


		//Similar recipes
		$.getJSON('includes/recipe_similar.php', { recipe_id: data.id }, function(similar_data){


			//To be used for handlebars
			context = {
				recipe_cards: []
			};



			$.each(similar_data, function(j){
			
				//only show 3 similar recipes
				if(j == 3){
					return false;
				}

				recipe_id_similar = similar_data[j].id;

				recipe_name = similar_data[j].title;

				image_url = "https://spoonacular.com/recipeImages/" + similar_data[j].image;

				ready_time = similar_data[j].readyInMinutes;

				similar_recipes.push( {id: recipe_id_similar, name: recipe_name, image: image_url, time: ready_time} );


				//handlebars
				context.recipe_cards.push( {id: recipe_id_similar, name: recipe_name, image: image_url, time: ready_time} );


			});




			$.each(similar_recipes, function(j){

				//Summary for similar recipes
		 		$.getJSON('includes/recipe_summary.php', { recipe_id: similar_recipes[j].id }, function(summary_data){

					console.log("Similar recipe id: " + similar_recipes[j].id);

					console.log("Similar recipe name: " + similar_recipes[j].name);
					console.log("Similar recipe image: " + similar_recipes[j].image);
					console.log("Similar recipe readyInMinutes: " + similar_recipes[j].time);

					console.log("Similar recipe summary: " + summary_data.summary);


					recipe_name = similar_recipes[j].name;

					image_url = similar_recipes[j].image;

					ready_time = similar_recipes[j].time;

					recipe_summary = summary_data.summary;





					//makeCard(similar_recipes[j].id);


					// after handlebars, append the summary info 
					var this_card = $('#recipe-cards .col').eq(j+1); // +1 takes into account the col with the Related Recipes <h4>

					$('.summary', this_card).append(recipe_summary);


					var urls = $('.summary a', this_card);

			        $.each(urls, function(){

			        	var this_url = $(this).attr('href');

			        	console.log("this url: " + this_url);

			        	var new_url = 'recipe.php?id=' + this_url.substring(this_url.lastIndexOf('-') + 1);

			        	console.log( this_url.substring(this_url.lastIndexOf('-') + 1) );

			        	$(this).attr('href', new_url);
			        });


				}).fail( function(data, textStatus, error){

					//Log errors
					console.error("getJSON failed, status: " + textStatus + ", error: " + error);

				}); //END get summary JSON	


			}); //END each


		}).done( function(){

			//Run handlebars after the json has completed
			runHandlebars();
			
		}).fail( function(data, textStatus, error){

			//Log errors
			console.error("getJSON failed, status: " + textStatus + ", error: " + error);

		});
		//END get recipe similar JSON


	


 		//Summary  (will load after the previous JSON request is complete)
 		$.getJSON('includes/recipe_summary.php', { recipe_id: data.id }, function(summary_data){

			//console.log(summary_data.summary);

			recipe_summary = summary_data.summary;

			$('#summary-container').append('<p class="flow-text">' + recipe_summary + '</p>');



			//Fix urls to link within the site rather than going offsite
			var urls = $('#summary-container p a');

	        $.each(urls, function(){

	        	var this_url = $(this).attr('href');

	        	console.log("this url: " + this_url);

	        	var new_url = 'recipe.php?id=' + this_url.substring(this_url.lastIndexOf('-') + 1);

	        	console.log( this_url.substring(this_url.lastIndexOf('-') + 1) );

	        	$(this).attr('href', new_url);
	        });



		}).fail( function(data, textStatus, error){

			//Log errors
			console.error("getJSON failed, status: " + textStatus + ", error: " + error);

		});


		//Ingredients
		$.each(data.extendedIngredients, function(i){

			console.log(data.extendedIngredients[i].name + ": " + data.extendedIngredients[i].amount + " " + data.extendedIngredients[i].unit);

			var ingredient_name = data.extendedIngredients[i].name;
			var ingredient_image = data.extendedIngredients[i].image;
			var ingredient_amount = data.extendedIngredients[i].amount;
			var ingredient_unit = data.extendedIngredients[i].unit;

			var ingredient_item = '<li class="collection-item avatar">' +
				      '<img src="'+ingredient_image+'" alt="" class="circle">' +
				      '<span class="title">'+ingredient_name+'</span>' +
				      '<p>'+ingredient_amount+' '+ingredient_unit+'</p>' +
				    '</li>';


		    $('#ingredient-list').append(ingredient_item);

		});


		//Ingredients  (will load after the previous JSON request is complete)
 		// 	$.getJSON('includes/recipe_ingredients.php', { recipe_id: data.results[i].id }, function(ingredient_data){


		// 	$.each(ingredient_data.extendedIngredients, function(i){

		// 		console.log(ingredient_data.extendedIngredients[i].name + ": " + ingredient_data.extendedIngredients[i].amount + " " + ingredient_data.extendedIngredients[i].unit);
		// 	});

		// });


 		function makeCard(this_id){

			//recipe card
			var recipe_card = '<div class="col s12 m4">' + 
	            '<div class="card sticky-action" style="overflow: hidden;">' + 
	              '<div class="card-image waves-effect waves-block waves-light" style="height:200px">' +
	                '<img class="activator" style="object-fit: cover; height: 100%;" src="https://spoonacular.com/recipeImages/'+image_url+'">' +
	              '</div>' +
	              '<div class="card-content" style="height: 100px;overflow-y:auto;">' +
	                '<span class="card-title activator grey-text text-darken-4" style="line-height: 1.25;">'+recipe_name+'<i class="material-icons right">more_vert</i></span>' +
	              '</div>' +

	              '<div class="card-action">' +
	                '<a class="green-text lighten-2" href="recipe.php?id='+this_id+'">Get Cookin&rsquo;</a>' +
	              '</div>' +

	              '<div class="card-reveal" style="display: none; transform: translateY(0px);">' +
	                '<span class="card-title grey-text text-darken-4" style="line-height: 1.25;">'+recipe_name+'<i class="material-icons right">close</i></span>' +
	                //'<p>Servings: '+servings+'</p>' +
	                '<p>Ready in: '+ready_time+' minutes</p>' +
	                '<p>'+recipe_summary+'</p>' +
	              '</div>' +
	            '</div>' +
	        '</div>';


	        $('#recipe-cards').append(recipe_card);


	        var urls = $('#recipe-cards .col:last-of-type .card-reveal p a');

	        $.each(urls, function(){

	        	var this_url = $(this).attr('href');

	        	console.log("this url: " + this_url);

	        	var new_url = 'recipe.php?id=' + this_url.substring(this_url.lastIndexOf('-') + 1);

	        	console.log( this_url.substring(this_url.lastIndexOf('-') + 1) );

	        	$(this).attr('href', new_url);
	        });

	    }


	}).fail( function(data, textStatus, error){

		//Log errors
		console.error("getJSON failed, status: " + textStatus + ", error: " + error);

	});
	//END JSON




	/* ********************* Handlebars ************************* */

	function runHandlebars(){

		// Retrieve the template data from the HTML
		var source = $("#card-template").html();

		// Compile the template data into a function
		var template = Handlebars.compile(source);


		var html = template(context);

		$('#recipe-cards').append(html);


		/* IE Object Fit fix */
		var userAgent, ieReg, ie;
		userAgent = window.navigator.userAgent;
		ieReg = /msie|Trident.*rv[ :]*11\./gi;
		ie = ieReg.test(userAgent);

		if(ie) {
		  $("#recipe-cards .card-image").each(function () {
		    var $container = $(this),
		        imgUrl = $container.find("img").prop("src");
		    if (imgUrl) {
		      $container.css("backgroundImage", 'url(' + imgUrl + ')').addClass("custom-object-fit");
		    }
		  });
		}
		/* END IE Object Fit fix */

	}

	/********************* END Handlebars ************************ */





	/* ********************************************** */
	//Add recipe to favorites
	$('.container').on('click', '#favorite', function(){

		var button = $(this);

		$.ajax({
	        type: 'POST',
	        url: 'includes/recipe_add_favorite.php',
	        data: {recipe_id: this_recipe_id},
	        success: function(msg) {

        		Materialize.toast(msg, 4000);

        		$(button).addClass('disabled');

        		// $(button).fadeOut(300, function(){

        		// 	$(button).remove();
        		// });

	        },
	        error: function(){

	        	Materialize.toast('Error: could not add recipe to favorites. Please try again', 4000);
	        }
	    });


	});
	//END Add recipe to favorites
	/* ********************************************** */
	




});