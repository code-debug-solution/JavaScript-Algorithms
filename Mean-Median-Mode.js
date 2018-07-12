// Mean, Median, and Mode
// Given an array of numbers, calculate the mean, median, and mode.

// arr = array
function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  }
}

// Mean
function getMean(arr) {
  var sum = 0;
  arr.forEach(num => {
    sum += num;
  });
  var mean = sum / arr.length;
  return mean;
}

// Median
function getMedian(arr) {
  arr.sort(function(a, b){return a-b});
  var median;

  if (arr.length % 2 !== 0) {
    median = arr[Math.floor(arr.length / 2)];
  }
  else {
    var mid1 = arr[(arr.length / 2) - 1];
    var mid2 = arr[arr.length / 2];
    median = (mid1 + mid2) / 2;
  }
  return median;
}

// Mode
function getMode(arr) {
  var modeObj = {};

  // Create modeObj
  arr.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  // Create array of mode/s
  var maxFrequency = 0;
  var modes = [];
  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    }
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  // If every value appears same amount of times
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}

meanMedianMode([9,10,23,10,23,9, 23]);

// OR

// Like:
const stat1 = new Stats([1, 2, 3, 4, 4, 5, 5]);
const stat2 = new Stats([1, 1, 2, 2, 3, 3, 4, 4]);

describe("Mean", () => {
  it("Should implement mean", () => {
    assert.equal(Stats.round(stat1.mean()), 3.43);
    assert.equal(Stats.round(stat2.mean()), 2.5);
  });
});
describe("Median", () => {
  it("Should implement median", () => {
    assert.equal(stat1.median(), 4);
    assert.equal(stat2.median(), 2.5);
  });
});
describe("Mode", () => {
  it("Should implement mode", () => {
    assert.deepEqual(stat1.mode(), [4, 5]);
    assert.deepEqual(stat2.mode(), []);
  });
});

// Analysis:

// In terms of difficulty, the algorithm to find the mean of a collection of numbers is the easiest. Statistically, the mean is defined as the sum of the collection divided by its size. Therefore, we can simply use the array’s reduce method to calculate its sum and then divide that by its length. This algorithm has runtime complexities of linear time and constant space because every number needs to be added while no internal memory is necessary.

// The algorithm to find the median of a collection is of medium difficulty. First, we need to sort the array, but if its size is even, we will need extra logic to deal with two middle numbers. In these cases, we will need to return the average of those two numbers. This algorithm has a linearithmic time complexity due to sorting and a linear space complexity because internal memory is needed to hold the sorted array.

// The algorithm to find the mode is the most challenging. Since the mode is defined as the number or numbers that appear the most often, we will need to maintain a frequency table. To complicate things further, if every value appears the same number of times, there is no mode. In code, this means we will need to create a hash map that tallies the frequency of each unique number, and then loop through it to collect the maximum number or numbers, or none. Because every number needs to be counted to create the hash table which is held in memory, this algorithm has a linear time and space complexity.