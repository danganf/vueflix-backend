"use restrict";

//import { getDetail } from '../repositories/film-repository';

exports.getHome = async (req, res, next) => {
    try{
        //let dataResult = await getDetail( media, req.params.id );
        res.status(200).send( {message: 'aaaaaa'} );
    } catch(e){
        res.status(500).send({ message: "Nenhum registro localizado", data: e });
    }
}