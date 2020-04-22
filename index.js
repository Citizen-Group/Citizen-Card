// Include required modules.
var express = require('express');

// App components.

// Port for Express app to listen on.
var port = process.argv[2] || 4545;

// Set up Express app and router.
var app = express();
var router = express.Router();
app.listen(port);

// Server logic
var counter = 0;

/**
 * Web Discovery 
 */
app.get('/', function(req, res, next) {
	res.status(200).json({message: 'Citizen Card Services v0.0.1'});
});

/**
 * Add a new user/member into the Citizen Database
 */
app.get('/add', function(req, res, next) {
	counter++;
	res.status(200).json({message: 'Created Citizen ' + counter});
});

/**
 * Generates a card for a user stored in the database
 * 
 * Options:
 * - If the card exists. Reply with existing card and message.
 * - If force invalidate is true. Invalidate the card and reissue
 */
app.get('/card/create', function(req, res, next) {
	counter++;
	res.status(200).json({message: 'Created Citizen ' + counter});
});

app.get('/card/update', function(req, res, next) {

	if (!req.query.user) {
		res.status(200).json({
			error: 'missing user param',
			message: ''
		});
	} else if (!req.params.user > counter) {
		res.status(200).json({
			error: 'user param was not found in the database',
			message: ''
		});
	}
	res.status(200).json({message: 'Updated Citizen ' + counter});
});

app.get('/card/lock', function(req, res, next) {

	if (!req.query.user) {
		res.status(200).json({
			error: 'missing user param',
			message: ''
		});
	} else if (!req.params.user > counter) {
		res.status(200).json({
			error: 'user param was not found in the database',
			message: ''
		});
	}
	res.status(200).json({message: 'Updated Citizen ' + counter});
});


app.get('/card/unlock', function(req, res, next) {

	if (!req.query.user) {
		res.status(200).json({
			error: 'missing user param',
			message: ''
		});
	} else if (!req.params.user > counter) {
		res.status(200).json({
			error: 'user param was not found in the database',
			message: ''
		});
	}
	res.status(200).json({message: 'Updated Citizen ' + counter});
});