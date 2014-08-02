$("#mainButton").click(function(event) {

	var data = {};
	data.username = $("input[name=username]").val();
	data.password = $("input[name=password]").val();


	$.ajax({
		url: '', 
		type: 'POST',
		data:  JSON.stringify(data),
		contentType: 'application/json; charset=utf-8',
		success: function (response) {
          logOutput(response.message);
        },
	}); 

});