	function NoticiasDAO(connection){

		this._connection = connection;

	}

	NoticiasDAO.prototype.getNoticias = function(callback){
		this._connection.query('select * from noticias ORDER BY data_criacao DESC', callback);
	}

	NoticiasDAO.prototype.getNoticia = function(id, callback){
		//console.log(id.id)
		this._connection.query('select * from noticias where id = ' + id.id, callback);
	}

	NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
		console.log(noticia);
		this._connection.query('insert into noticias set ? ', noticia, callback)
	}

	NoticiasDAO.prototype.getLastFive = function(callback){
		//console.log(noticia);
		this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5',  callback);
	}



module.exports = function(){

	//this.getNoticias = function(connection, callback){
	//	connection.query('select id,titulo from noticias', callback);
	//}

	//this.getNoticia = function(connection, callback){
	//	connection.query('select * from noticias where id = 2', callback);
	//}

	//this.salvarNoticia = function(noticia, connection, callback){
	//	connection.query('insert into noticias set ? ', noticia, callback)
	//}

	return NoticiasDAO;


}