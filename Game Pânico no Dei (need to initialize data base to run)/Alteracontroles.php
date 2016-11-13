<?php
    require_once 'db_connection.php';
    $db = new DB_Connection();
    $conn = $db->connect();

	$response = array();

	if (isset($_POST["username"]) && isset($_POST["controles"])) {
		$username=$_POST["username"];
		$controles = $_POST ["controles"];
		if ($username != null && $controles != null){
		$stmt =$conn->prepare ("UPDATE players SET controles = ? WHERE username = ?");
		$stmt->bind_param("ss",$controles,$username);
		if ($stmt->execute()){
			$response ["success"] = 1;
			$response ["msg"] = "Comandos guardados";
			echo json_encode ($response);
		}else {
			$response ["success"] =0;
			echo json_encode ($response);
		}
	}else{
		$response ["success"] =0;
		echo json_encode ($response);
	}
	}else{
		$response ["success"] =0;
		echo json_encode ($response);
	}
	 $conn->close();
?>