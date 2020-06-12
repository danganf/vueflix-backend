"use restrict";

const axiosSrv         = require('../services/axios');
const modelFilm        = require('../models/film');
const modelMovieDetail = require('../models/movie-detail');
const modelTvDetail    = require('../models/tv-detail');
const { CON_URL_IMG_URL } = require('../configs/config-default');

exports.getDetail = async (media, id) => {

    media      = media.toLowerCase();
    let data   = {};    
    let params = `${media}/${parseInt(id)}`;
    let result = await axiosSrv.request( params, '?' );
    if( result ){        
        result.poster_path   = CON_URL_IMG_URL + result.poster_path;
        result.backdrop_path = CON_URL_IMG_URL + result.backdrop_path;
        let model            = null;
        switch( media ){
            case 'movie': model = new modelMovieDetail();break;
            case 'tv'   : model = new modelTvDetail();break;
        }
        model.setdata( result )
        data = model.toObjData();        
    }
    return data;
};

exports.getPopularity = async () => {

    let params  = 'discover/movie?&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2020';
    
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
    let params = `trending/${media}/${time}?page=1&year=2020`;
    
    let data   = [];
    let result = await axiosSrv.request( params );
    result.forEach( ( item, idx ) => {     
        if( idx >= 12 ) return;
        item.poster_path = CON_URL_IMG_URL + item.poster_path;
        if( item.name ){
            item.title = item.name;
            delete item.name;
        }
        model.setdata( item )
        data.push( model.toObjData() );
    } );

    return data;
};