const mongoose = require('mongoose');

const IP = 'localhost';
const dbName = 'inventory';
const serverPort = process.env.PORT || 8080;

const dbURL = `mongodb://${IP}:27017/${dbName}`;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Connecting to the database
mongoose.connect(dbURL, (err) => {
    if (err) {
        console.log('Error: ', err);
    } else {
        console.log('Successfully connected to Mongo!');
    }
});

module.exports = {
    mongoose,
    IP,
    serverPort
};