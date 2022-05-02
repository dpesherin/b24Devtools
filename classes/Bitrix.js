const res = require("express/lib/response");

class Bitrix{
    constructor(client_id, client_secret, domain){
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.domain = domain;
        this.code = NaN;
        this.access_token = NaN;
        this.refresh_token = NaN;
        this.expires = NaN;
    }

    setTokens(access_token, refresh_token, expires){
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this.expires = expires;
    }

    setCode(code){
        this.code = code;
    }

    checkStatus(res, targetView, params){
        if(this.expires > Date.now()){
            return res.render(targetView , params);
        }else{
            return res.render('auth.ejs');
        }
    }

}

module.exports = Bitrix;