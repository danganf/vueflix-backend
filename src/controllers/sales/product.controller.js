"use restrict";

const repository = require('../../repositories/product-repository');

exports.getHome = async (req, res, next) => {
    try{
        let dataResult = await repository.getHome();
        res.status(200).send( dataResult );
    } catch(e){
        res.status(500).send({ message: "Nenhum registro localizado", data: e });
    }
}

exports.putSold = async (req, res, next) => {
    try{
        await repository.putSold(req.params.id);
        res.status(200).send( { message: 'OK' } );
    } catch(e){
        res.status(e.status).send({ message: 'Falha no processando', data: e });
    }
}