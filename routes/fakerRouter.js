const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    return bitrix.checkStatus(res, 'faker.ejs',{});
});

router.get('/fakeusers', (req, res)=>{
    return bitrix.checkStatus(res, 'fakeusers.ejs',{});
});

router.get('/fakeleads', (req, res)=>{
    return res.send('Lead faker page');
});

router.get('/fakedeals', (req, res)=>{
    return res.send('Deal faker page');
});

module.exports = router;