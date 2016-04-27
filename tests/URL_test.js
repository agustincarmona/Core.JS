/*
*/
'use strict';

var assert = require('assert');
var moduleObject = require('../extensions/Object');
var moduleURL = require('../URL');

describe('URL Module', function() {

  it('should retrieve path without domain and parameters', function () {

    assert.equal('/home', moduleURL.URL.getPathname('http://www.domain.com/home'));

  });

});
