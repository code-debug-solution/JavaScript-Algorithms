// Two Sum
// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.
describe("Two Sum", () => {
  it("Should implement two sum", () => {
   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
  });
 });

// OR

// Like:
// 1. Result should be an array of arrays.
// 2. Any number in the 'numArr' can be used in multiple pairs.
function twoSum(numArr, sum) {
  var pairs = [];
  var hashTable = [];

  for (var i = 0; i < numArr.length; i++) {
    var currNum = numArr[i];
    var counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ]);
    }
    hashTable.push(currNum);
  }
  return pairs;
}

twoSum([1, 6, 4, 5, 3, 3], 7);

// Analysis:

// An obvious solution is to create nested loops that check each number against every other number in the same array. Those that add up to the given sum can be pushed to a solution array as pairs. However, this nesting causes a quadratic time complexity which is not performant for large inputs.

// A clever trick is to maintain an array that contains the “counterpart” of each number as we iterate through the input array, while simultaneously checking for the existence of each number’s counterpart. By maintaining such an array, we sacrifice space efficiency to gain a linear time complexity.