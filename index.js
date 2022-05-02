const express = require('express');
const app = express();
const PORT = 5000;
const config = require('config');
const Bitrix = require('./classes/Bitrix');
const axios = require('axios');
const bitrixRouter = require('./routes/bitrixRouter');
const fakerRoutes = require('./routes/fakerRouter');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('./public'));
app.use(bitrixRouter);
app.use('/datafaker', fakerRoutes);


app.listen(PORT, ()=>{
    console.log(`Server started on port: ${PORT}`);
    console.log(`time: ${new Date}`);
});

const client_id = config.get('client_id');
const client_secret = config.get('client_secret');
const domain = config.get('domain');

bitrix = new Bitrix(client_id, client_secret,domain);


app.get('/', (req, res)=>{
    bitrix.checkStatus(res, 'index.ejs',{});
})

app.get('/indev', (req, res)=>{
    bitrix.checkStatus(res, 'indev.ejs',{title: "'Development'"});
});

app.get('/listinjector', (req, res)=>{
    bitrix.checkStatus(res, 'indev.ejs',{title: "'List Injector'"});
});

app.get('/tasktracker', (req, res)=>{
    bitrix.checkStatus(res, 'indev.ejs',{title: "'Task Tracker'"});
});
