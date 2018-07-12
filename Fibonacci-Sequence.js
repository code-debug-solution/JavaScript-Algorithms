// Fibonacci Sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34...
// The first two numbers are 1 & 1 and very number after that is the sum of the previous two numbers.
// Note: that this algorithm has a very bad exponential time complexity run time which is O(2^n).

function fibonacci(position) {
  if (position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}

fibonacci(6);