let express = require('express');
let app = express();
const router = require("./routers/router");

let port = process.env.port || 3000;


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/Flowers', router)

app.listen(port, ()=>{
    console.log('express server started');

});


