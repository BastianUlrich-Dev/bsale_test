const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    // host: 'localhost',
    host: 'localhost',
    // host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'root',
    // user: 'root',
    // user: 'bsale_test',
    password: '',
    // password: '',
    // password: 'bsale_test',
    database: 'bsale_test'
    // database: 'bsale_test'
})

// bb2f8f51dfa068:72128506@us-cdbr-east-05.cleardb.net/heroku_77525fe8d842d38

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('db is connected');
    }
});

module.exports = mysqlConnection;