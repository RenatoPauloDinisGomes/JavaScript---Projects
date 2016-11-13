<?php
	class DB_Connection {
    	private $connection;
    	public function connect() {
        	require_once 'db_config.php';
        	$this->connection = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
        	if ($this->connection->connect_error) {
    			die("Connection failed: " . $this->connection->connect_error);
			}
        	return $this->connection;
    	}
	}
?>
