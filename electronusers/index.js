//equivalencia query=$ 
var $ = require('jquery');//no es un archivo, es un paquete
var inicia=function()
	{
		var nuevo=function()
		{
				//JSON para sacar el nombre y la foto
				//alert("clic"); lo usamos para ver si funcionaba
			$.ajax({
			  url: 'https://randomuser.me/api/',
			  dataType: 'json',
			  success: function(data)
				  {
				    $("#nombre").html(data.results[0].name.first+ " "+data.results[0].name.last);
				  	$("#foto").attr("src",data.results[0].picture.large);
				  }
			});
		}

		//alert("Página Cargada");
		$('#btnNuevo').on("click", nuevo);//activar el clic del botón
		//$('#btnNuevo').on("click", nuevo); //desactivando el botón, el evento
	}
$(document).ready(inicia); //la papgina esta lista cuando se termina de cargar, cuando este lista la pagina se debe de iniciar el juery