const port = 8000;
const express = require('express');
const db = require('./config/mongoose');
const app = express();

app.use(express.urlencoded());

app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err){ console.log(`error in starting server: ${err}`); }

    console.log(`server up and running on port: ${port} `);
})
    
