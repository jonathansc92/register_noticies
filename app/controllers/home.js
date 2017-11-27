module.exports.index = function(app, req, res){

	var connection = app.config.db();
	res.render('home/index');
}
