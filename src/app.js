'use strict';

const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();

app.use( bodyParser.json( { limit: '5mb' } ) );
app.use( bodyParser.urlencoded( { extended: false } ) );

// Habilita o CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-backend-token");
    next();
});

//CARREGAR ROTAS
app.use( '/'      , require('./routes/index') );
app.use( '/media' , require('./routes/films') );
app.use( '/genres', require('./routes/genre') );

module.exports = app;