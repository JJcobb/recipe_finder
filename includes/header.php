	  <div class="navbar-fixed">
		  <nav>
			<div class="nav-wrapper">
			  <a href="index.php" class="brand-logo"><img border="0" style="width:150px;" alt="pantry" src="img/pantrylogo.png"></a>
			  <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a><!--Hamburger Menu Icon-->
			  <ul id="nav-mobile" class="right nav-items hide-on-med-and-down">
				<li><a href="index.php">Home</a></li>
					<?php
						if($_SESSION['loggedin']=='false'){
							echo "<li><a class='signIn' href='#!'>Sign In</a></li>";
							echo "<li><a class='signUp' href='#!'>Sign Up</a></li>";
						}
					?>
				<!--<li><a class="signIn" href="#!">Sign In</a></li>
				<li><a class="signUp" href="#!">Sign Up</a></li>-->
					<?php
						if($_SESSION['loggedin']=='true'){
							
							$user_id=$_SESSION['id'];
							
							echo "<li><a class='fav' href='profile.php'>Favorites</a></li>";
							echo "<li><a class='signOut' href='#!'>Sign Out</a></li>";
						}
					?>
				<!--<li><a class="fav" href="profile.php">Favorites</a></li>
				<li><a class="signOut" href="#!">Sign Out</a></li> -->
			  </ul>
			  <ul class="side-nav" id="mobile-demo"><!--Hamburger Menu-->
				<li><a href="index.php">Home</a></li>
					<?php
						if($_SESSION['loggedin']=='false'){
							echo "<li><a class='signIn' href='#!'>Sign In</a></li>";
							echo "<li><a class='signUp' href='#!'>Sign Up</a></li>";
						}
					?>
				<!--<li><a class="signIn" href="#!">Sign In</a></li>
				<li><a class="signUp" href="#!">Sign Up</a></li>-->
					<?php
						if($_SESSION['loggedin']=='true'){
							
							$user_id=$_SESSION['id'];
							
							echo "<li><a class='fav' href='profile.php'>Favorites</a></li>";
							echo "<li><a class='signOut' href='#!'>Sign Out</a></li>";
						}
					?>
				<!--<li><a class="fav" href="profile.php">Favorites</a></li>
				<li><a class="signOut" href="#!">Sign Out</a></li> -->
			  </ul>
			</div>
		  </nav>
	  </div> 
	  	<div class="col s12 center-align panel signUpPanel">
		<div class="row">
		  <form class="col s8 offset-s2 panel-form" action="process.php" method="POST"><br><br>
			  <!-- <input placeholder="Name" class="input" type="text" name="first_name" required/><br><br> -->
			  <input placeholder="Email" class="input" type="email" name="email" required/><br><br>
			  <input placeholder="Username" class="input" type="text" name="username" required/><br><br>
			  <input placeholder="Password" class="input" type="password" name="password" required/><br><br>
			  <button type="submit" class="waves-effect waves-light btn signUpbtn">Sign Up</button>
		  </form>
		</div>
	</div>
	<div class="col s12 center-align panel signInPanel">
		<div class="row">
		  <form class="col s8 offset-s2 panel-form" action="process.php" method="POST"><br><br>
			  <input placeholder="Username" class="input" type="text" name="username"required/><br><br>
			  <input placeholder="Password" class="input" type="password" name="password"required/><br><br>
			  <button type="submit" class="waves-effect waves-light btn signInbtn">Sign In</button>
		  </form>
		</div>
	</div>