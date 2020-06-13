"use restrict";

const repository = require('../repositories/genre-repository');

exports.getList = async (req, res, next) => {
    try{        
        let dataResult = await repository.getList(req.params.media);
        res.status(200).send( dataResult );
    } catch(e){
        res.status(500).send({ message: "Nenhum registro localizado", data: e });
    }
};