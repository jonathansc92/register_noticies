module.exports = function(app){

	app.get('/formulario_inclusao_noticia', function(req, res){

		res.render('admin/form_add_noticia');

	});

	app.post('/noticias/salvar', function(req, res){
		var noticia = req.body;
		//validacao, conexao, model(DAO), salva
		//console.log(noticia);
		req.assert('titulo','Título é obrigatório').notEmpty();
		req.assert('resumo','Resumo é obrigatório').notEmpty();
		req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
		req.assert('autor','Título é obrigatório').notEmpty();
		//req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
		req.assert('noticia','Noticia é obrigatório').notEmpty();

		var errors = req.validationErrors();

		console.log(errors);

		if(errors){
			res.render('admin/form_add_noticia', {validacao: errors});
			return;
		}

		var connection = app.config.db();	
		var noticiasModel = new app.app.models.NoticiasDAO(connection);

		noticiasModel.salvarNoticia(noticia, function(error, result){
			res.redirect('/noticias');
		});

	});
};