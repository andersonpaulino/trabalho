$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/dados.json",
	success: function(data) {
		var id;

		for(var i in data.noticia) {
			id = data.noticia[i].id;
			
			
			$('#content').append('<article class="">'+ data.noticia[i].texto+'</article>');
			
      
			
		}
	}
});