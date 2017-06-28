$(document).ready(function(){
	$(".btn").click(function(e){
		e.preventDefault();
		var tareaNueva = $("#tareaNueva").val();
		if(tareaNueva == ""){
			alert("Debes escribir una tarea");
		}else{
			$("#listaTareas").append("<li>" + tareaNueva);
		}
	});
});