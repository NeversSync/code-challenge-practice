const assert = require('chai').assert;
const { findFactors, sumAndMultiply, findSumFactors } = require('../scripts/sumAndMultiply7kyu');

describe.skip('sumAndMultiply', () => {

  describe('Simple Tests', function() {
    it('should pass these tests', function() {
      assert.deepEqual(sumAndMultiply(13, 12), [1, 12]);
      assert.deepEqual(sumAndMultiply(6, 9), [3, 3]);
      assert.deepEqual(sumAndMultiply(200, 8452), null);
      assert.deepEqual(sumAndMultiply(15, 56), [7, 8]);
    });
  });
  
  describe('findFactors', function() {
    it('works', function() {
      assert.deepEqual(findFactors(12), [[1, 12], [2, 6], [3, 4]]);
      assert.deepEqual(findFactors(9), [[1, 9], [3, 3]]);
      assert.deepEqual(findFactors(56), [[1, 56], [2, 28], [4, 14], [7, 8]]);
      assert.deepEqual(findFactors(8452), [[1, 8452], [2, 4226], [4, 2113]]);
    })
  });
  
  describe('findSumFactors', function() {
    it('works', function() {
      assert.deepEqual(findSumFactors(13, [[1, 12], [2, 6], [3, 4]]), [1, 12]);
      assert.deepEqual(findSumFactors(6, [[1, 9], [3, 3]]), [3, 3]);
      assert.deepEqual(findSumFactors(15, [[1, 56], [2, 28], [4, 14], [7, 8]]), [7, 8]);
      assert.deepEqual(findSumFactors(200, [[1, 8452], [2, 4226], [4, 2113]]), undefined);
    })
  });

});