const { CON_API_BASE_URL, CON_API_KEY_AUTH_v3 } = require('../configs/config-default');
const axios = require('axios');

class axiosService{
    constructor(){
        
    }

    async request( params ){
        let data = [];
        //console.log(CON_API_BASE_URL + params + '&api_key=' + CON_API_KEY_AUTH_v3);
        await axios.get( CON_API_BASE_URL + params + '&api_key=' + CON_API_KEY_AUTH_v3 )
        .then(function (response) {                
            data = response.data.results;
        })
        .catch(function (error) {
            
        });
        
        return data;
    }


}

module.exports = new axiosService();