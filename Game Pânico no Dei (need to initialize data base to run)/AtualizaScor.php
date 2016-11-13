<?php
    require_once 'db_connection.php';
    $db = new DB_Connection();
    $conn = $db->connect();

	$response = array();

	if (isset($_POST["username"]) && isset($_POST["MScor"])){
        $username = $_POST["username"];
        $MScor = $_POST["MScor"];
        $stmt = $conn->prepare("SELECT * FROM players WHERE username = ?");
        $stmt->bind_param("s",$username);
        if ($stmt->execute()) {
            $user = $stmt->get_result()->fetch_assoc();
            $stmt->close();
			if (intval($user ["MScor"]) <intval($MScor)){
				$stmt =$conn->prepare ("UPDATE players SET MScor = ? WHERE username = ?");
				$stmt->bind_param("ss",$MScor,$username);
				if ($stmt->execute()){
					$response ["success"] = 1;
					$response ["msg"] = "Scor guardados";
					echo json_encode ($response);
				}
			}else{
				$response ["success"] = 0;
				$response ["error_msg"] = "O Scor não é maior que o recor do utilizador";
				echo json_encode ($response);
			}
			
		}else{
			$response["success"]=0;
			$response["erro_msg"]="Nome de utilizar não existe";
			echo json_encode($response);
		}
			
	}else {
		$response ["success"] = 0;
		$response ["erro_msg"] = "Faltam argumentos";
		echo json_encode ($response);
	}
	 $conn->close();
?>