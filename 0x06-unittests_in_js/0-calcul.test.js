const calculateNumber = require('./0-calcul.js');
const { it, describe } = require('mocha');
const assert = require('assert');

describe('calculateNumber', function () {
  it('should return 4 when called with 1 and 3', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return 5 when called with 1 and 3.7', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should return 5 when called with 1.2 and 3.7', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should return 6 when called with 1.5 and 3.7', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
