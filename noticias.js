

// Importar biblioteca http para criar o servidor
var http = require('http');

// Criar servidor
var server = http.createServer(function(req, res){

	// Requisições Brownser
	var categoria = req.url;

	if(categoria == '/tecnologia'){
		res.end("<html><body>Tecnologia</body></html>");
	}else if(categoria == '/moda'){
		res.end("<html><body>Moda</body></html>");
	}
	else if(categoria == '/beleza'){
		res.end("<html><body>Belexza</body></html>");
	}else{
	res.end("<html><body>Portal</body></html>");
}

});


server.listen(3000);