var assert = require('assert');
describe('Array', function() {
  
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
  
  describe('SumOfTwoNumbers', function() {
    it('should return the sum of thow numbers', function() {
      assert.equal(4, sum(2,2));
    });
  });
  
  describe('SubsTracOfTwoNumbers', function() {
    it('should return the subtrac of thow numbers', function() {
      assert.equal(0, sub(2,2));
    });
  });

});

var sum = function(a,b){
    return a+b;
}

var sub= function(a,b){
  return a-b;
}