// Memoized Fiboncci

function memoFib(index, cache) {
  // index: index of number in fibonacci sequence.
  // cache: an array used as memory.
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = memoFib(index - 1, cache) + memoFib(index -2, cache);
    }
  }
  return cache[index];
}

memoFib(200);