	var mysql = require('mysql');

	var conn = function(){
		console.log('Conexao com banco de dados estabelecida');
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'portal_noticias'
		});
	}

	module.exports = function(){
		console.log('Autoload carregado com sucesso!');
		return conn; 
	};