"use restrict";

const axiosSrv  = require('../services/axios');
const modelFilm = require('../models/film');
const { CON_URL_IMG_URL } = require('../configs/config-default');

exports.getPopularity = async () => {

    let params  = 'discover/movie?language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2020';
    
    let data   = [];
    let result = await axiosSrv.request( params );
    let model  = new modelFilm();
    result.forEach( ( item ) => {        
        item.poster_path = CON_URL_IMG_URL + item.poster_path;
        model.setdata( item )
        data.push( model.toObjData() );
    } );

    return data;
};

exports.getTrendingByType = async (media, time) => {

    media = media || 'movie';
    time  = time  || 'week';
    let model  = new modelFilm();
    let params = `trending/${media}/${time}?language=pt-BR&page=1&year=2020`;
    
    let data   = [];
    let result = await axiosSrv.request( params );
    result.forEach( ( item ) => {        
        item.poster_path = CON_URL_IMG_URL + item.poster_path;
        model.setdata( item )
        data.push( model.toObjData() );
    } );

    return data;
};