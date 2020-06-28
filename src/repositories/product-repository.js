"use restrict";

var path = require('path');
var sqlite = require('sqlite-sync');
var exceptions = require('../util/Exceptions');

const TABLE = 'products';
const STATUS = [
    0,//DESATIVADO
    1,//ATIVO
    2//VENDIDO
]

sqlite.connect( path.resolve('src/db/products.db') );

exports.getHome = async () => {

    let data = sqlite.run(`SELECT id, name, image, categories, type, price FROM ${TABLE} WHERE status=${STATUS[1]}`);
    return data;
};

exports.putSold = async (id) => {

    id = parseInt(id);
    let data = sqlite.run(`SELECT id, name FROM ${TABLE} WHERE id=${id} AND status=${STATUS[1]}`);   
    if( data.length ){
        let data = sqlite.run(`UPDATE ${TABLE} SET status=? WHERE id=?`, [ STATUS[2], id ], (err) => {
            if (err) {
              throw new exceptions('ProductException', err.message);
            }
        });
    } else {
        throw new exceptions('ProductException', 'ID não existente ou já desativado');
    }
};