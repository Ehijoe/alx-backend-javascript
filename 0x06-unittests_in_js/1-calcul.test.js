const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('Works for integers', function () {
      assert.equal(calculateNumber('SUM', 1, 2), 3);
    });
    it('Rounds down correctly', function () {
      assert.equal(calculateNumber('SUM', 1.2, 2), 3);
      assert.equal(calculateNumber('SUM', 1, 2.2), 3);
      assert.equal(calculateNumber('SUM', 1.3, 2.3), 3);
    });
    it('Rounds up correctly', function () {
      assert.equal(calculateNumber('SUM', 1.6, 2), 4);
      assert.equal(calculateNumber('SUM', 1, 2.9), 4);
      assert.equal(calculateNumber('SUM', 1.6, 2.6), 5);
    });
  });
  describe('SUBTRACT', function () {
    it('Works for integers', function () {
      assert.equal(calculateNumber('SUBTRACT', 1, 2), -1);
    });
    it('Rounds down correctly', function () {
      assert.equal(calculateNumber('SUBTRACT', 1.2, 2), -1);
      assert.equal(calculateNumber('SUBTRACT', 1, 2.2), -1);
      assert.equal(calculateNumber('SUBTRACT', 1.3, 2.3), -1);
    });
    it('Rounds up correctly', function () {
      assert.equal(calculateNumber('SUBTRACT', 1.6, 2), 0);
      assert.equal(calculateNumber('SUBTRACT', 1, 2.9), -2);
      assert.equal(calculateNumber('SUBTRACT', 1.6, 2.6), -1);
    });
  });
  describe('DIVIDE', function () {
    it('Works for integers', function () {
      assert.equal(calculateNumber('DIVIDE', 1, 2), 0.5);
    });
    it('Rounds down correctly', function () {
      assert.equal(calculateNumber('DIVIDE', 1.2, 2), 0.5);
      assert.equal(calculateNumber('DIVIDE', 1, 2.2), 0.5);
      assert.equal(calculateNumber('DIVIDE', 1.3, 2.3), 0.5);
    });
    it('Rounds up correctly', function () {
      assert.equal(calculateNumber('DIVIDE', 1.6, 2), 1);
      assert.equal(calculateNumber('DIVIDE', 1, 3.9), 0.25);
      assert.equal(calculateNumber('DIVIDE', 1.6, 3.6), 0.5);
    });
    it('Division by zero returns error', function () {
      assert.equal(calculateNumber('DIVIDE', 4, 0), 'Error');
    });
  });
});
