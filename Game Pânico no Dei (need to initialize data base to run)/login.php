<?php
    require_once 'db_connection.php';
    $db = new DB_Connection();
    $conn = $db->connect();;

	$response = array();

    if (isset($_POST["username"]) && isset($_POST["password"])) {
        $username = $_POST["username"];
        $password = $_POST["password"];
		if ($username != null && $password !=null){
        $stmt = $conn->prepare("SELECT * FROM players WHERE username = ?");
        $stmt->bind_param("s",$username);
        if ($stmt->execute()) {
            $user = $stmt->get_result()->fetch_assoc();
            $stmt->close();
			if ($user['password'] == $password){
				$response["success"]=1;
				$response ["username"] = $user["username"];
				$response ["controles"] = $user ["controles"];
				$response ["MScor"] = $user ["MScor"];
				echo json_encode($response);
			}else{
				$response ["success"] = 0;
				$response ["error_msg"] = "Credentials are wrong!";
				echo json_encode ($response);
			}

        } else {
            $response["success"] =0;
        	$response["error_msg"] = "Credentials are wrong!";
        	echo json_encode($response);
        }
		}else {
			$response["success"] =0;
        	$response["error_msg"] = "Credentials are wrong!";
        	echo json_encode($response);
		}
    } else {
        $response["success"] = 0;
    	$response["error_msg"] = "Required parameters (username or Password) is missing!";
    	echo json_encode($response);
    }

   $conn->close();
?>
