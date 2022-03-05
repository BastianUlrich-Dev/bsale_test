const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    // host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'root',
    // user: 'bsale_test',
    password: '',
    // password: 'bsale_test',
    database: 'bsale_test'
})

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('db is connected');
    }
});

module.exports = mysqlConnection;