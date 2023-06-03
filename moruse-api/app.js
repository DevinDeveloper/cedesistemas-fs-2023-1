const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config({path: `src/env/.env.${process.env.NODE_ENV}`});

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// connect with database
require('./src/conn/mongo_conn');

// modules
app.use('/auth', require('./src/modules/users/auth.routes'));
app.use('/clothes', require('./src/modules/clothes/clothes.routes'));


app.listen(port,() => {
  console.log(`Server Run on port ${port}`)
});
