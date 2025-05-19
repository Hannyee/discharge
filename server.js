// Needed for Express
var express = require('express')
var app = express()

// Needed for EJS
app.set('view engine', 'ejs');

// Needed for public directory
app.use(express.static(__dirname + '/public'));

// Main landing page
app.get('/', function(req, res) {
    res.render('pages/home');
});

// Tells the app which port to run on
app.listen(8080);