$(document).ready(function(){

	$(".btn").click(function(e){
		e.preventDefault();

		var tareaNueva = $("#tareaNueva").val();

		if(tareaNueva == ""){
			alert("Debes escribir una tarea");
		}else{
			$("#list-items").append("<li><input type='checkbox' class='checkbox'/>" + tareaNueva + "<a class='waves-effect waves-light btn pink remove'><i class='material-icons right'>delete</i></a></li>");

			$("#tareaNueva").val("");
			}
	});

	$(document).on('click', '.remove', function()
	{
		$(this).parent().remove();
	});

	$(document).on('click','.checkbox',function(e){
		e.preventDefault();

		if($(this).prop('checked', true))
    	{
      		$(this).prop('checked', false);
    	}

    	$(this).parent().replaceAll('#list-finish');
	});
});

	