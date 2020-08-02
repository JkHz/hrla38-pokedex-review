const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
// const router = require('./router.js');
const app = express()
const port = 3000
const db = require('../database')
const controller = require('./controller.js');

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api', controller.get);
app.put('/api/:id', controller.put);
app.delete('/api/:id', controller.delete);
app.post('/api', controller.post)

app.use(express.static(path.join(__dirname, '../client/dist')))

app.listen(port)

