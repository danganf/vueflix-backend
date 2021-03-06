
const modelContract = require('../util/modelContract');

const attrs = {
    id: null,
    title: null,
    status: null,
    tagline: null,
    overview: null,
    poster_path: null,
    backdrop_path: null,
    genres: null,
    production_companies: [],
    production_countries: [],
    imdb_id: null,
    homepage: null,
    popularity: null,
    vote_average: null,
    vote_count: null,
};

class customerModel extends modelContract{
    constructor(){
        super(attrs);
    }
}

module.exports = customerModel;