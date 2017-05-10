<?php

	if($_SERVER["SERVER_ADDR"]=="10.171.228.39"){
		$mysqli = new mysqli("localhost", "username", "password", "databasename");
	}
	else{
		//Your localhost info
		//$mysqli = new mysqli("localhost", "username", "password", "databasename");
	}


?>