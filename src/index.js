const express = require('express');
const cors = require('cors');
const app = express();

//Setings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use(require('./routes/products'));

//Starting the server
app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'));
});
