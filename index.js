const express = require('express')
const app = express()
const fs = require('fs')
var bodyParser     =        require("body-parser");
var sides = [];
var pizzas = [];
var currentUser;
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/login', (req, res) => {
	fs.readFile('users.json', function (err, data) {
		if (err) throw err;
		obj = JSON.parse(data);
		if(obj[req.body] !== undefined){
			currentUser = obj[req.body];
			res.status(200).end("Login successful");
		} else {
			res.status(404).end("User not found");
		}
	});
});
app.get('/cart/view', (req, res) =>{
	console.log(pizzas);
	console.log(sides);
	res.end(JSON.stringify([pizzas, sides]));
});
app.post('/sides/add', (req, res) =>{
	console.log(req.body);
	sides.push(req.body);
	res.status(200).end("yes");
});
app.post('/pizza/add', (req, res) =>{
	console.log(req.body);
	pizzas.push(req.body);
	res.status(200).end("yes");
});
app.listen(port, () => console.log('Example app listening on port ' + port + '!'));
