const express = require('express');
const router = express.Router();
const config = require('config');
const axios = require('axios');

const client_id = config.get('client_id');
const client_secret = config.get('client_secret');
const domain = config.get('domain');


router.get('/getcode', (req, res)=>{
    return res.redirect(`${domain}/oauth/authorize/?client_id=${client_id}`);
});

router.get('/setcode', (req,res)=>{
    axios.get(`https://oauth.bitrix.info/oauth/token/?grant_type=authorization_code&client_id=${client_id}&client_secret=${client_secret}&code=${req.query.code}`).then(resp => {
        bitrix.setTokens(resp.data.access_token, resp.data.refresh_token, (resp.data.expires * 1000));
        return res.redirect('/');
    });
});

module.exports = router;