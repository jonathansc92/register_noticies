// Importar modulo express para criar o servidor
var express = require('express');

var app = express();

app.set('view engine', 'ejs');

module.exports = app;