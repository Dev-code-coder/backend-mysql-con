const {connection} = require('../../../config/db')

const find = (req, res) =>{
    let $sqlQuery = `select * from users`
    connection.query($sqlQuery,(err,result)=>{
    if (err) return res.send(err);
    return res.send(result)
    });

};
const insert = (req, res) =>{
    let $sqlQuery = `insert into users (first_name, last_name, email, password) VALUES(?)`;
    let values = [
        req.body.first_name,
        req.body.last_name,
        req.body.password,
        req.body.email
    ]
    connection.query($sqlQuery,[values],(err,result)=>{
    console.log(result,'testing');
    if (err) return res.send(err);
    return res.send(result)
    });

};

module.exports = {find, insert}