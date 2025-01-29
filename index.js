require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const router = require('./router/index');
const {dbConnection} = require('./config/db');


app.use(express.json())

dbConnection();
app.use(router);

const msg = ($msg)=>{
console.log($msg);
}

app.listen(PORT,msg(`Server is running as ${PORT}`))