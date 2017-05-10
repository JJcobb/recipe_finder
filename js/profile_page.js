$(function(){


	$(document).ajaxStart(function() {
    	$('#loading').append('<div class="progress"><div class="indeterminate"></div></div>');
	});

	$(document).ajaxComplete(function() {
    	$('#loading').empty();
	});


	var recipe_ids = [];


	//for handlebars
	var context = {
		recipe_cards: []
	};



    $.getJSON('includes/recipe_favorites.php', function(data){

    	console.log(data);

    	$.each(data, function(i){


			//recipe id
	 		console.log(data[i].id);

	 		recipe_ids.push(data[i].id);


	 		//title
	 		console.log(data[i].title);

	 		var recipe_name = data[i].title;


	 		//image url
	 		console.log(data[i].image)

	 		var image_url = data[i].image;


	 		//ready in
	 		console.log("Ready in: " + data[i].readyInMinutes);

	 		var ready_time = data[i].readyInMinutes;



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
		                '<a class="right delete-recipe red-text lighten-2" href="#!" data-recipe-id="'+recipe_ids[i]+'">Delete</a>' +
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


		        //$('#recipe-cards').append(recipe_card);


		        var urls = $('#recipe-cards .col:last-of-type .card-reveal p a');

		        $.each(urls, function(){

		        	var this_url = $(this).attr('href');

		        	console.log("this url: " + this_url);

		        	var new_url = 'recipe.php?id=' + this_url.substring(this_url.lastIndexOf('-') + 1);

		        	console.log( this_url.substring(this_url.lastIndexOf('-') + 1) );

		        	$(this).attr('href', new_url);
		        });

		    } // END make card function


		    makeCard();



	 	}); //END each


	}).fail( function(data, textStatus, error) {

		//log errors
        console.error("getJSON failed, status: " + textStatus + ", error: "+error);

    }).done( function(){

		//Run handlebars after the json has completed
		runHandlebars();
		
	}); //END JSON





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




	/* *************************************** */
	//Delete Recipe
	$('#recipe-cards').on('click', '.delete-recipe', function(){

		$(this).closest('.col').fadeOut(300, function(){

			$(this).closest('.col').remove();
		});

		var delete_recipe = $(this).attr('data-recipe-id');

		$.ajax({
	        type: 'GET',
	        url: 'includes/recipe_delete',
	        data: {recipe_id: delete_recipe},
	        success: function(msg) {

        		Materialize.toast(msg, 4000);

	        },
	        error: function(){

	        	Materialize.toast('Error: could not delete. Please try again', 4000);
	        }
	    });
	    //END AJAX

	});
	//END Delete Recipe
	/* *************************************** */



});