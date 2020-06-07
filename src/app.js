'use strict';

const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();

app.use( bodyParser.json( { limit: '5mb' } ) );
app.use( bodyParser.urlencoded( { extended: false } ) );

//CARREGAR ROTAS
const routeIndex = require('./routes/index');
const routeFilms = require('./routes/films');

app.use( '/'      , routeIndex );
app.use( '/films' , routeFilms );

module.exports = app;