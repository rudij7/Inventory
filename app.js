const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const { mongoose } = require('./config');
const { IP } = require('./config');
const { serverPort } = require('./config');

const User = require('./models/user');
const Item = require('./models/item');

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(serverPort, (req, res) => {
    console.log(`Listening to port ${serverPort}...\n`);
});