// Include required modules.
var express = require('express');

// App components.

// Port for Express app to listen on.
var port = process.argv[2] || 4545;

// Set up Express app and router.
var app = express();
var router = express.Router();
app.listen(port);

app.get('/', function(req, res, next) {
	res.status(200).json({message: 'Citizen Card Services v0.0.1'});
});