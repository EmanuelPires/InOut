var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var port = 3000;
var routes = require('./routes');
app.use(routes);
mongoose.connect('mongodb://localhost/InOut');
app.listen(port, function() {
  console.log('App Listening on Port: ' + port);
});

//views

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

//body parser
