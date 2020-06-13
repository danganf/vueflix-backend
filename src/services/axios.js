const { CON_API_BASE_URL, CON_API_KEY_AUTH_v3, CON_LANG } = require('../configs/config-default');
const axios = require('axios');

class axiosService{
    constructor(){
        
    }

    async request( params, paramGet ){
        let data = null;

        paramGet = paramGet || '&';

        const url = CON_API_BASE_URL + params + paramGet + 'language=' + CON_LANG + '&api_key=' + CON_API_KEY_AUTH_v3;
        console.log(url);
        await axios.get( url )
        .then(function (response) {  
            if( typeof response.data.results !== 'undefined'){
                data = response.data.results;
            } else {
                data = response.data;
            }
        })
        .catch(function (error) {
            
        });
        
        return data;
    }


}

module.exports = new axiosService();