$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/dados.json",
	success: function(data) {
		var id;

		for(var i in data.imagens) {
			id = data.imagens[i].id;

			$('#content').append('<div> <img src='+ data.imagens[i].caminho[0]+'></div>');
			$('#content').append('<div> <img src='+ data.imagens[i].caminho[1]+'></div>');
			$('#content').append('<div> <img src='+ data.imagens[i].caminho[2]+'></div>');
			
		}
	}
});