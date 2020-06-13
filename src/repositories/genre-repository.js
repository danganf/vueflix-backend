"use restrict";

const axiosSrv   = require('../services/axios');
const modelGenre = require('../models/genre');

/**
 * @param {media, page} objSetup 
 */
exports.getList = async ( media ) => {

    let params  = `genre/${media}/list`;
    
    let data   = [];
    let result = await axiosSrv.request( params, '?' );
    let model  = new modelGenre();
    result.genres.forEach( ( item ) => {
        model.setdata( item )
        data.push( model.toObjData() );
    } );

    return data;
};