// Write a function that accepts two parameters (sum and multiply) and find two numbers [x, y], where x + y = sum and x * y = multiply.

// Example:
// sum = 12 and multiply = 32
// In this case, x equals 4 and y equals 8.
// x = 4
// y = 8

// Because
// x + y = 4 + 8 = 12 = sum
// x * y = 4 * 8 = 32 = multiply

// The result should be [4, 8].

// Note:

// 0 <= x <= 1000
// 0 <= y <= 1000

// If there is no solution, your function should return null (or None in python).

// You should return an array (list in python) containing the two values [x, y] and it should be sorted in ascending order.

// One last thing: x and y are integers (no decimals).


function sumAndMultiply (sum, multiply) {
  if(multiply === 0) return [0, sum];
  const factors = findFactors(multiply);
  const result = findSumFactors(sum, factors);
  return result === undefined ? null : result; 
}

function findFactors(multiply) {
  const factors = [];
  for(let i = 1; i <= Math.sqrt(multiply); i++) {
    if(multiply % i === 0) factors.push([i, multiply / i]);
  }
  return factors;
}
 
function findSumFactors(sum, factors) {
  return factors.find((pair) => {
    if(pair[0] + pair[1] === sum) return pair;
  });
}

module.exports = { sumAndMultiply, findFactors, findSumFactors };
