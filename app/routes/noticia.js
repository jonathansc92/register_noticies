//var db = require('../../config/db');


module.exports = function(app){

	app.get('/noticia', function(req, res){

		var connection = app.config.db();	
		
		connection.query('select * from noticias where id = 2', function(error, result){
			res.render('noticias/noticia', {noticia: result});
		});

	});
};