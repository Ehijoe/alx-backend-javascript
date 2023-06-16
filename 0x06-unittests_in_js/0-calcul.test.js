const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', () => {
  it('should return 4 when called with 1 and 3', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('should return 5 when called with 1 and 3.7', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('should return 5 when called with 1.2 and 3.7', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('should return 6 when called with 1.5 and 3.7', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
