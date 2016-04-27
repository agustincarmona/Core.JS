'use strict';

var assert = require('assert');

var moduleURL = require('./URL');
var moduleObject = require('./extensions/Object');
var moduleClass = require('./Class');

describe('URL Module', function() {

  it('should retrieve path without domain and parameters', function () {

    assert.equal('/home', moduleURL.URL.getPathname('http://www.domain.com/home'));

  });

});


describe('Class module', function() {
	
	it('extend class', function() {
		var myClass = moduleClass.Class.extends({
			
		});
		assert.equal(true, typeof myClass == 'function');
	});
	
});
