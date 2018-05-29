var inicioApp = function(){
	var Aceptar = function(){
		var usuario=$("#txtUsuario").val();
		var clave =$("#txtClave").val();
		var parametros="opc=validaentrada"+
						"&usuario="+usuario+
						"&clave="+clave+
						"&aleatorio="+Math.random();
		$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url: "php/validaentrada.php",
			data: parametros,
			success: function(response) {
				if(response.respuesta == true){
					//Ocultamos el inicio
					$("#secInicio").hide("slow");
					//Aparecemos usuarios
					$("#frmUsuarios").show("slow");
					//Cursor en el primer cuadro de texto
					$("#txtNombreUsuario").focus();
				}else{
					alert("usuario o clave incorrecta(s)");
				}
			},
			error: function(xhr,ajaxOptions,thrownError){

			}
		});
	}
	var buscarUsuario = function(){
		var usuario = $("#txtNombreUsuario").val();
		var parametros = "opc=buscarUsuario"+
						 "&usuario="+usuario+
						 "&aleatorio="+Math.random();
		if (usuario != ""){
			$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url: "php/buscarUsuario.php",
			data: parametros,
			success: function(response) {
				if(response.respuesta == true){
				$("#txtNombre").val(response.nombre);
				$("#txtClaveUsuario").val(response.clave);
				}else{
					$("#txtNombre").focus();
				}
			},
			error: function(xhr,ajaxOptions,thrownError){

			}
		});
		}
	}
	var teclaNombreUsuario = function(tecla){
		if (tecla.which == 13){//Enter
			buscarUsuario();
		}
	}
	var Guardar = function(){
		var usuario=$("#txtNombreUsuario").val();
		var nombre =$("#txtNombre").val();
		var clave  =$("#txtClaveUsuario").val();
		var parametros="opc=guardarusuario"+
						"&usuario="+usuario+
						"clave="+clave+
						"&nombre="+nombre+
						"&aleatorio="+Math.random();
		if(usuario!="" && nombre!="" && clave!=""){
			$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url: "php/guardarusuario.php",
			data: parametros,
			success: function(response) {
				if(response.respuesta == true){
					alert("Datos guardados correctamente");
					$("#frmUsuarios > input").val();
				}else{
					alert("Ocurrio un error, intente de nuevo más tarde");
				}
			},
			error: function(xhr,ajaxOptions,thrownError){

			}
		});
		}else{
			alert("Llene todos los campos");
		}
	}
	var Borrar = function(){
		var usuario = $("#txtNombreUsuario").val();
		var nombre  = $("#txtNombre").val();
		var pregunta  = prompt("Seguro de borrar a "+nombre+"? (si/no)", "no");
		var parametros="opc=borrarususaio"+
						"&usuario"+usuario+
						"&aleatorio"+Math.random();

		if (pregunta != null && pregunta == "si"){
			$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url: "php/borrarusuario.php",
			data: parametros,
			success: function(response) {
				if(response.respuesta == true){
					alert("Datos borrados correctamente");
					$("#frmUsuarios > input").val();
				}else{
					alert("Ocurrio un error, intente de nuevo más tarde");
				}
			},
			error: function(xhr,ajaxOptions,thrownError){

			}
		});
    			
		}
	}

	var Listado = function(){
		$("main > section").hide("slow");
		$("#frmListado").show("slow");
		var parametros = "opc=listado"+
						 "&aleatorio="+Math.random();
		$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url: "php/listado.php",
			data: parametros,
			success: function(response) {
				if(response.respuesta == true){
					$("#tblListado").append(response.tabla);
				}else{
					alert("Ocurrio un error, intente de nuevo más tarde");
				}
			},
			error: function(xhr,ajaxOptions,thrownError){

			}
		});
	}

	$("#btnAceptar").on("click",Aceptar);
	$("#txtNombreUsuario").on("keypress",teclaNombreUsuario);
	$("#btnGuardar").on("click",Guardar);
	$("#btnBorrar").on("click",Borrar);
	$("#btnListado").on("click",Listado);
}
$(document).ready(inicioApp);