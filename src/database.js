const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'bb2f8f51dfa068',
    password: '72128506',
    database: 'heroku_77525fe8d842d38'
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