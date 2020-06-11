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