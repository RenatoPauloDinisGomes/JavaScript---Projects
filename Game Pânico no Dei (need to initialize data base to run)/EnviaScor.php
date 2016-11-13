<?php
    require_once 'db_connection.php';
    $db = new DB_Connection();
    $conn = $db->connect();

	$response = array();
	$ArrayScore = array();
	$request = $conn->prepare("SELECT * FROM players");
	if ($request->execute()){
		$result = $request->get_result();
		$request->close();
		$response["success"] = 1;
		$response["hscores"] = array();
		while ($row = mysqli_fetch_array($result)){
			$user = array();
			$user["username"] = $row ["username"];
			$user["MScor"] = $row ["MScor"];
			array_push($response["hscores"],$user);
		}
		echo json_encode ($response);
	 }else{
		$response ["sucess"]=0;
		$response ["erro_msg"] = "Não conetou";
	 }

	 $conn->close();
?>