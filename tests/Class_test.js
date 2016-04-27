/*
*/
'use strict';

var assert = require('assert');
var moduleObject = require('../extensions/Object');
var moduleClass = require('../Class');

describe('Class module', function() {
	
	it('extend class', function() {
		var myClass = moduleClass.Class.extends({
			
		});
		assert.equal(true, typeof myClass == 'function');
	});
	
});