$(function(){

	//Materialize Tabs Initialization
	$('ul.tabs').tabs();


	var recipe_search;
	
	/* ******************************************************* */
	//Default Recipes

	recipe_search = '20minutes';
	
	
	console.log(recipe_search);



	//for handlebars
	var context;



	function filteredSearch(){


		$('#recipe-cards').empty();



		var recipe_ids = [];



		//To be used for handlebars
		context = {
			recipe_cards: []
		};



	    $.getJSON('includes/recipe_info.php', { recipe_query: recipe_search }, function(data){


			$.each(data.results, function(i){


				//recipe id
		 		console.log(data.results[i].id);

		 		recipe_ids.push(data.results[i].id);


		 		//title
		 		console.log(data.results[i].title);

		 		var recipe_name = data.results[i].title;


		 		//image url
		 		console.log(data.results[i].image)

		 		var image_url = data.results[i].image;


		 		//vegetarian
		 		if( data.results[i].vegetarian ){
		 			console.log("vegetarian");
		 		}
		 		else {
		 			console.log("Not vegetarian");
		 		}
		 		

		 		//vegan
		 		if( data.results[i].vegan ){
		 			console.log("Vegan");
		 		}
		 		else {
		 			console.log("Not vegan");
		 		}


		 		//gluten free
		 		if( data.results[i].glutenFree ){
		 			console.log("Gluten Free");
		 		}
		 		else {
		 			console.log("Not Gluten Free");
		 		}


		 		//dairy free
		 		if( data.results[i].dairyFree ){
		 			console.log("Dairy Free");
		 		}
		 		else {
		 			console.log("Not Dairy Free");
		 		}


		 		//cheap
		 		if( data.results[i].cheap ){
		 			console.log("Affordable");
		 		}
		 		else {
		 			console.log("Not cheap");
		 		}



		 		//servings
		 		console.log("servings: " + data.results[i].servings);

		 		var servings = data.results[i].servings;


		 		//ready in
		 		console.log("Ready in: " + data.results[i].readyInMinutes);

		 		var ready_time = data.results[i].readyInMinutes;


		 		//instructions
		 		// $.each(data.results[i].analyzedInstructions[0].steps, function(j){

		 		// 	console.log("Step " + data.results[i].analyzedInstructions[0].steps[j].number + ": " + data.results[i].analyzedInstructions[0].steps[j].step);
		 		// });


		 		var recipe_summary = "blank";


		 		//Summary  (will load after the previous JSON request is complete)
		 		$.getJSON('includes/recipe_summary.php', { recipe_id: recipe_ids[i] }, function(summary_data){

					console.log(summary_data.summary);

					recipe_summary = summary_data.summary;

					//makeCard();


					var this_card = $('#recipe-cards .col').eq(i);

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

				});
				// END JSON


				//Ingredients  (will load after the previous JSON request is complete)
		 	// 	$.getJSON('includes/recipe_ingredients.php', { recipe_id: recipe_ids[i] }, function(ingredient_data){


				// 	$.each(ingredient_data.extendedIngredients, function(i){

				// 		console.log(ingredient_data.extendedIngredients[i].name + ": " + ingredient_data.extendedIngredients[i].amount + " " + ingredient_data.extendedIngredients[i].unit);
				// 	});

				// });


		 		function makeCard(){

					//recipe card
					/*var recipe_card = '<div class="col s12 m4">' + 
			            '<div class="card sticky-action" style="overflow: hidden;">' + 
			              '<div class="card-image waves-effect waves-block waves-light" style="height:200px">' +
			                '<img class="activator" style="object-fit: cover; height: 100%;" src="'+image_url+'">' +
			              '</div>' +
			              '<div class="card-content" style="height: 100px;overflow-y:auto;">' +
			                '<span class="card-title activator grey-text text-darken-4" style="line-height: 1.25;">'+recipe_name+'<i class="material-icons right">more_vert</i></span>' +
			              '</div>' +

			              '<div class="card-action">' +
			                '<a class="green-text lighten-2" href="recipe.php?id='+recipe_ids[i]+'">Get Cookin&rsquo;</a>' +
			              '</div>' +

			              '<div class="card-reveal" style="display: none; transform: translateY(0px);">' +
			                '<span class="card-title grey-text text-darken-4" style="line-height: 1.25;">'+recipe_name+'<i class="material-icons right">close</i></span>' +
			                //'<p>Servings: '+servings+'</p>' +
			                '<p>Ready in: '+ready_time+' minutes</p>' +
			                '<p>'+recipe_summary+'</p>' +
			              '</div>' +
			            '</div>' +
			        '</div>';*/




			        //handlebars recipe card
					var recipe_card = {
						id: recipe_ids[i],
						image: image_url,
						name: recipe_name,
						time: ready_time
						//summary: recipe_summary
					}

					context.recipe_cards.push(recipe_card);




			        //$('#recipes #recipe-cards').append(recipe_card);


			        var urls = $('#recipe-cards .col:last-of-type .card-reveal p a');

			        $.each(urls, function(){

			        	var this_url = $(this).attr('href');

			        	console.log("this url: " + this_url);

			        	var new_url = 'recipe.php?id=' + this_url.substring(this_url.lastIndexOf('-') + 1);

			        	console.log( this_url.substring(this_url.lastIndexOf('-') + 1) );

			        	$(this).attr('href', new_url);
			        });

			    }// END make card


			    makeCard();



		 	}); //END each



		}).done( function(){

				//Run handlebars after the json has completed
				runHandlebars();
			
		}).fail( function(data, textStatus, error){

			//Log errors
			console.error("getJSON failed, status: " + textStatus + ", error: " + error);

		});
		//END JSON



	};//END filtered search


	filteredSearch();


	/* ******************************************************* */





	/* ********************* Handlebars ************************* */

	function runHandlebars(){

		// Retrieve the template data from the HTML
		var source = $("#card-template").html();

		// Compile the template data into a function
		var template = Handlebars.compile(source);


		var html = template(context);

		$('#recipes #recipe-cards').append(html);



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





	/* ******************************************************* */
	//Filter
	$('.filter_btn').on('click', function(e){

		e.preventDefault();
		

		recipe_search = $(this).attr('id');
		
		
		$('.filter_btn').removeClass('active');
		
		
		
		$(this).addClass('active');
		
		

		console.log(recipe_search);
		
		

		$('#recipe-query').empty();


		filteredSearch();


	}); //END filter
	/* ******************************************************* */




});