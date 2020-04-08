const port = 8000;
const path = require('path');
const express = require('express');
const db = require('./config/mongoose');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname+'/views'));

app.use('/', require('./routes/index'));
// app.use(express.urlencoded);

app.get('/', function(req, res){
    return res.render('home');
})

app.listen(port, function(err){
    if(err){ console.log(`error in starting server: ${err}`); }
    console.log(`server up and running on port: ${port} `);
})
    
