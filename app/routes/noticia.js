//var db = require('../../config/db');


module.exports = function(app){

	app.get('/noticia', function(req, res){

		var connection = app.config.db();	
		var noticiasModel = app.app.models.noticiasModel;

		noticiasModel.getNoticia(connection, function(error, result){
			res.render('noticias/noticia', {noticia: result});
		});

	});
};