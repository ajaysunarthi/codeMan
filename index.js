var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

mongoose.connect('mongodb://127.0.0.1:27017/card');

var api = require('./utils/api.js');

app.use('/api/v1', api);
app.use(express.static(__dirname+'/client'));

app.listen(port);
console.log('Magic happens on port ' + port);

module.exports = app;