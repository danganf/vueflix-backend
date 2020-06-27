"use restrict";

var path = require('path');
var sqlite = require('sqlite-sync');
sqlite.connect( path.resolve('src/db/products.db') );

exports.getHome = async () => {

    let data = sqlite.run("SELECT * FROM products");;
    return data;
};