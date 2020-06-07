"use restrict";

const { CON_API_BASE_URL, CON_URL_IMG_URL } = require('../configs/config-default');
const modelFilm = require('../models/film');
const axios = require('axios');

exports.get = async () => {

    let fields = '&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2020';
    
    let data = [];
    await axios.get(CON_API_BASE_URL + fields)
    .then(function (response) {
        response.data.results.forEach( ( item ) => {
            modelFilm.setdata( item )
            data.push( modelFilm.toObjData() );

        } );
    })
    .catch(function (error) {
        
    });

    return data;
};
