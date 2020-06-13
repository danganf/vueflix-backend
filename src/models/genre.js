
const modelContract = require('../util/modelContract');

const attrs = {
    id: null,
    name: null
};

class customerModel extends modelContract{
    constructor(){
        super(attrs);
    }
}

module.exports = customerModel;