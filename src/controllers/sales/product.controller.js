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