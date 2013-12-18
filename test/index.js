require('mocha-as-promised');

var chai = require("chai");
    chai.should();
var expect = chai.expect;

var Promise = require('../index');
var obj = {};

describe('Promise', function () {

  it('has a yield method', function() {
    return new Promise(function(resolve) {
      resolve(1);
    }).then(function() {
      return 1;
    })
    .yield(obj)
    .then(function(resp) {
      expect(resp).to.equal(obj);
    });
  });

  it('has a tap method', function() {
    return new Promise(function(resolve) {
      resolve(1);
    }).tap(function() {
      return 2;
    }).then(function(resp) {
      expect(resp).to.equal(1);
    });
  });

});