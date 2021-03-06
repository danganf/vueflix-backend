"use restrict";

const repository = require('../repositories/film-repository');

exports.getDetail = async (req, res, next) => {
    try{
        const media    = req.params.media;
        let dataResult = await repository.getDetail( media, req.params.id );
        res.status(200).send( dataResult );
    } catch(e){
        res.status(500).send({ message: "Nenhum registro localizado", data: e });
    }
};

exports.getList = async (req, res, next) => {
    try{
        const media  = req.params.media;
        const search = { 
            media, 
            page  : req.params.page,
            year  : 2020,
            sort  : 'popularity',//media === 'tv' ? 'first_air_date' : 'popularity',
            dir   : 'desc',
            genre : '',    
        };

        if( typeof req.query.year  !== 'undefined' ){search.year  = parseInt( req.query.year );}
        if( typeof req.query.genre !== 'undefined' ){search.genre = req.query.genre.trim();}
        if( typeof req.query.sort  !== 'undefined' ){search.sort  = req.query.sort.trim() || search.sort;}
        if( typeof req.query.dir   !== 'undefined' ){search.dir   = req.query.dir.trim()  || search.dir;}

        let dataResult = await repository.getList(search);    
        
        res.setHeader('x-paginator-current-page', repository.paginator('current_page') );
        res.setHeader('x-paginator-total-results', repository.paginator('total_results') );
        res.setHeader('x-paginator-total-pages', repository.paginator('total_pages') );
        
        res.status(200).send( dataResult );
    } catch(e){
        res.status(500).send({ message: "Nenhum registro localizado", data: e });
    }
};

exports.getHome = async (req, res, next) => {

    try {
        let dataResult      = [];
        let dataPopular     = await repository.getPopularity();
        let dataTrendiMovie = await repository.getTrendingByType( 'movie' );
        let dataTrendiTv    = await repository.getTrendingByType( 'tv' );

        dataResult.push( { label: 'Popularidade'         , media: 'movie', data: dataPopular } );
        dataResult.push( { label: 'Trending Topic Filmes', media: 'movie', data: dataTrendiMovie } );
        dataResult.push( { label: 'Trending Topic TV'    , media: 'tv'   , data: dataTrendiTv } );

        res.status(200).send( dataResult );

    } catch(e){
        res.status(500).send({ message: "Nenhum registro localizado", data: e });
    }

};