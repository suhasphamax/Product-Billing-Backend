
let express = require('express');
let logger = require('morgan');
const cors=require('cors');

const {sequelize} = require('./models'); // import models

let bodyParser = require('body-parser')
let authentication = require('./routes/authentication');
let billing = require('./routes/billing');


let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());



app.use('/auth',authentication);
app.use('/billing',billing);


const PORT = process.env.PORT || 80;


app.listen(PORT, async() =>{
    console.log('server running on http://localhost:5000');

    // sequelize.sync().then(function(){
    //     console.log('DB connection sucessful.');
    //   }, function(err){
    //     // catch error here
    //     console.log(err);

    //   });
    // //await sequelize.sync({force: true}); //This creates the table, dropping them first if they already existed
    // await sequelize.authenticate();
});