<?php
    require_once 'db_config.php';
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD);
	// Check connection
	if ($conn->connect_error) {
    	die("Connection failed: " . $conn->connect_error);
	}

	//DB
	$sql_db = "CREATE DATABASE ".DB_NAME;

	if ($conn->query($sql_db) === TRUE) {
    	echo "Database created successfully.";
	} else {
    	echo "Error creating database: " . $conn->error;
	}

   	$conn->select_db(DB_NAME);

	//USERS TABLE
	$sql_user_tb = "CREATE TABLE players(
  		id int(16) PRIMARY KEY AUTO_INCREMENT,
        username Text NOT NULL,
        password varchar(20) NOT NULL UNIQUE,
   		encrypted_password varchar(80) NOT NULL,
   		created_at timestamp DEFAULT CURRENT_TIMESTAMP)";

	if ($conn->query($sql_user_tb) === TRUE) {
    	echo "Table players created successfully.";
	} else {
    	echo "Error creating table: " . $conn->error;
	}

	$conn->close();
?>
