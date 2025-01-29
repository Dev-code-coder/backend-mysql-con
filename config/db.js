require('dotenv').config();
const mysql = require('mysql');
const dbConfig = {
    host:process.env.DB_CON,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB
};

const connection = mysql.createConnection(dbConfig);

const dbConnection = () => {
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            return;
        }
        console.log('Connected to the database');
    });

    return connection;
};

module.exports = {dbConnection, connection}