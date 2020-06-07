"use restrict";

const repository = require('../repositories/film-repository');

exports.getHome = async (req, res, next) => {

    try {
        let data = await repository.get();
        res.status(200).send(data);
    } catch(e){
        res.status(500).send({ message: "Nenhum registro localizado", data: e });
    }

};