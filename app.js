

// Importar modulo express para criar o servidor
var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.get('/tecnologia', function(req, res){

	res.render('secao/tecnologia');

});

app.get('/', function(req, res){

	res.send('<html><body>tecnologia</body></html>');

});


app.listen(3000, function(){
	console.log('Servidor rodando com express');

});