const mysql = require("mysql");

const db = mysql.createPool({
    host: 'eu-cdbr-west-01.cleardb.com',
    user: 'b91c0317c519fe',
    password: 'f68457fe',
    database: 'heroku_d7eb81da459cb2c'
});

module.exports = db;

