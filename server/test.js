var server = require('./server');
var mocha = require('mocha');
var assert = require('assert');
var mongoose = require('mongoose');

describe('connection with mongoDB', function() {
	
	it('should say connected', function() {
		
		// check if connected
		assert.equal(mongoose.connection.readyState,1);

	});

});