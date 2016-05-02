'use strict';

let express = require('express');
let app = express();

app.get('/burritos/:id', function (req, res) {
	let burritoId = req.params.id;
	if (burritoId == 1234) {
		res.json(getBigBurrito());
	} else if (burritoId == 888) {
		res.json(getSmallBurrito());
	} else {
		res.status(404).send('Burrito not found');
	};
}).get('/burritos', function (req, res, next) {
	let payload = new Array();
	payload.push(getBigBurrito());
	payload.push(getSmallBurrito());
	res.json(payload);
});

app.listen(8080, function() {
	console.log('Server up and running...');
});

let getBigBurrito = function() {
	return {
		'id' : 1234,
		'weight' : '4 pounds'
	};	
};

let getSmallBurrito = function() {
	return {
		'id' : 888,
		'weight' : '1 pound'
	};	
};
