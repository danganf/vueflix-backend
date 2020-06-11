
const modelContract = require('../util/modelContract');

const attrs = {
    id: null,
    name: null,
    status: null,
    overview: null,
    poster_path: null,
    backdrop_path: null,
    genres: [],
    vote_average: null,
    vote_count: null,
    popularity: null,
    first_air_date: null,
    homepage: null,
    last_air_date: null,
    last_episode_to_air: null,
    next_episode_to_air: null,
    number_of_episodes: null,
    number_of_seasons: null,
    networks: [],
    created_by: [],
    production_companies: [],
    seasons: [],
};

class customerModel extends modelContract{
    constructor(){
        super(attrs);
    }
}

module.exports = customerModel;