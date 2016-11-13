<?php
    require_once 'db_connection.php';
    $db = new DB_Connection();
    $conn = $db->connect();

	$response = array();

	if (isset($_POST["username"]) && isset($_POST["password"]) && isset($_POST["controles"])&& isset($_POST["Mscor"])) {
		$username=$_POST["username"];
		$password=$_POST["password"];
		$controles = $_POST ["controles"];
		$Mscor = $_POST ["Mscor"];
		if ($username!=null && $password != null){
		$stmt = $conn->prepare("SELECT username FROM players WHERE username = ?");
		$stmt->bind_param("s", $username); 
		$stmt->execute();
		$stmt->store_result();
		$n_rows=$stmt->num_rows;
		$stmt->close();
		if($n_rows > 0){
			$response["confirm"] = 0;
			$response["error_msg"] = "username already registered!";
			echo json_encode($response);
		}else{
			$stmt = $conn->prepare("INSERT INTO players(username,password,controles,Mscor) VALUES(?, ?, ?, ?)");
			$stmt->bind_param("ssss",$username,$password,$controles,$Mscor);
			$result = $stmt->execute();
			$stmt->close();
			if ($result) {
				$stmt = $conn->prepare("SELECT * FROM players WHERE username = ?");
				$stmt->bind_param("s", $username);
				$stmt->execute();
				$user = $stmt->get_result()->fetch_assoc();
				$stmt->close();
				if ($user) {
					$response["confirm"] = 1;
					$response ["username"] = $user["username"];
					$response ["controles"] = $user ["controles"];
					$response ["MScor"] = $user ["MScor"];
					echo json_encode($response);
				} else {
					$response["confirm"] = 0;
					$response["error_msg"] = "Unknown error(DB related) occurred in registration!";
					echo json_encode($response);
				}
			} else {
				$response["confirm"] = 0;
				$response["error_msg"] = "Unknown error(DB related) occurred in registration!";
				echo json_encode($response);
			}
		}
	}else{
		$response["confirm"] = 0;
		$response["error_msg"] = "Unknown error(DB related) occurred in registration!";
		echo json_encode($response);
	}	
		
	}else {
  		$response["confirm"] = 0;
    	$response["error_msg"] = "Required parameters (username,password) is missing!";
    	echo json_encode($response);
    }

    $conn->close();
?>
