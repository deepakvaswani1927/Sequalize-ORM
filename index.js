const express = require('express');
const app = express();
const routes = require('./routes');
const db = require('./database');
require('dotenv').config();
const port = process.env.PORT;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/' , routes)
db.authenticate()
    .then(()=>console.log('Database Connected...'))
    .catch(err => console.log('Error :' +err))
    
app.listen(port, () => {
        console.log(`listening on port ${port}....`);
        });

