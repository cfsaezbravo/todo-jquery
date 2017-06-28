$(document).ready(function(){
	$(".btn").click(function(e){
		e.preventDefault();

		var tareaNueva = $("#tareaNueva").val();

		if(tareaNueva == ""){
			alert("Debes escribir una tarea");
		}else{
			$("#listaTareas").append("<li><input type=checkbox>" + "<span id='tareaAgregada'>" + tareaNueva + "</span>" + "<a class='waves-effect waves-light btn pink' id='btn-eliminar'><i class='material-icons right'>delete</i></a>");
			$("#tareaNueva").val("");

			$("#btn-eliminar").click(function(){
				$(this).parent().remove();
				/*this.remove();*/
			})
		}	
	});
});