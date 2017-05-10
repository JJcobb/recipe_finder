<?php
	//LOGOUT
	session_start();
	
	$_SESSION['loggedin'] = 'false';

	if(isset($_SESSION['id'])) {
		unset($_SESSION['id']);
	}

	echo "Signed Out";

?>