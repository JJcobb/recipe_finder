	//These functions can all be added into the main scripts file later
		  $(document).ready(function(){ /*-------Hamburger Menu Function---------*/
			$(".button-collapse").sideNav();
			
		  });/*--------End Hamburger Menu Function---------*/
		  
		  /*-------Sign Up Dropdown Panel--------*/
			$('.signUp').click(function(){
				$('.signInPanel').slideUp('fast');
				$('.signUpPanel').slideToggle('fast');
				$(this).toggleClass('active');
			});
		  
		  /*-------Sign Up BTN Dropdown Panel--------
			$('.signUpbtn').click(function(){
				$('.signUpPanel').slideToggle('fast');
				$(this).toggleClass('active');
			});
		  */
		  /*-------Sign In Dropdown Panel--------*/
			$('.signIn').click(function(){
				$('.signUpPanel').slideUp('fast');
				$('.signInPanel').slideToggle('fast');
				$(this).toggleClass('active');
			});
		  
		  /*-------Sign In BTN Dropdown Panel--------
			$('.signInbtn').click(function(){
				$('.signInPanel').slideToggle('fast');
				$(this).toggleClass('active');
			});
		  */
			
		  /*Search BTN Scroll down to recipe results*/
		/*	$('button[href^="#"]').on('submit', function(event) {

				var target = $(this.getAttribute('href'));

				if( target.length ) {
					event.preventDefault();
					$('html, body').stop().animate({
						scrollTop: target.offset().top
					}, 1000);
				}

			});*/
			
			$('.searchform').on('submit', function(e){
				$('html, body').animate({
					scrollTop: $("#recipes").offset().top
				}, 1000);
			});
			
			/*-------Image Slider--------*/
			$(document).ready(function(){
				$('.slider').slider();
			});