const express = require('express')
const app = express()
var bodyParser     =        require("body-parser");
var sides = [];
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/cart/view', (req, res) =>{
	console.log(sides);
	res.end(JSON.stringify(sides));
});
app.post('/sides/add', (req, res) =>{
	console.log(req.body);
	sides.push(req.body);
	res.status(200).end("yes");
});
app.listen(port, () => console.log('Example app listening on port ' + port + '!'));
