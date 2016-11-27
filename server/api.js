var express = require('express');

var router = express.Router();

var Card = require('./models.js');

router.use(function(req, res, next) {
    console.log('Some request is used !');
    next();
});

router.route('/cards')

.post(function(req, res) {

    })
    .get(function(req, res) {

    });

router.route('/cards/:card_id')

.post(function(req, res) {

    })
    .get(function(req, res) {

    });
