
const modelContract = require('../util/modelContract');

const attrs = {
    id: null,
    title: null,
    overview: null,
    poster: null,
    vote_count: null,
    popularity: null,
    vote_average: null,
    release_date: null,
};

class customerModel extends modelContract{
    constructor(){
        super(attrs);
    }
}

module.exports = new customerModel();