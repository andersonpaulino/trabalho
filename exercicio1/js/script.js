$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/dados.json",
	success: function(data) {
		var id;

		for(var i in data.selecione) {
			id = data.selecione[i].id;
			
			

			$('#content').append('<option>' +data.selecione[i].opcoes+'</option>');
			
			
			
		}
	}
});