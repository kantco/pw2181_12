<?php
include 'conexiones.php';
function borrarusuario(){
	$respuesta= false;
	$usuario= GetSQLValueString($_POST["usuario"],"text");
	//Conectarnos al servidor de BD.
	$con=conecta();
	$consulta=sprintf("delete from usuarios where usuario = %s",$usuario);
	mysqli_query($con,$consultaBorra); //Ejecuta la consulta
	if (mysqli_affected_rows($con) > 0){ //Cantidad de registros afectados
		$respuesta = true;
	}
	$salidaJSON = array('respuesta' => $respuesta);
	print json_encode($salidaJSON);
}
	$opc=$_POST["opc"];
	switch ($opc) {
		case 'borrarusuario':
			guardarusuario();
			break;
		
		default:
			
			break;
	}
?>