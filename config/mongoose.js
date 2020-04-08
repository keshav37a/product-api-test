const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ecommerce-dev');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to mongodb'));
db.once('open', function(){
    console.log('Successfully connectd to database::Database');
})

module.exports = db;