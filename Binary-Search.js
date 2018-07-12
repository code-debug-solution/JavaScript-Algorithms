// Binary Search: 
// - Search for a given value (key) inside of a list (numArray).
// - Runs in O(log n) run time - very performant.
// - Can be written as a recursive function.
function binarySearch(numArr, key) {
  var middleIdx = Math.floor(numArr.length / 2);
  var middleElem = numArr[middleIdx];

  if (middleElem === key) return true;
  else if (middleElem < key && numArr.length > 1) {
    return binarySearch(numArr.splice(middleIdx, numArr.length), key);
  }
  else if (middleElem > key && numArr.length > 1) {
    return binarySearch(numArr.splice(middleIdx), key);
  }
  else return false;
}

binarySearch([5, 11, 8, 23, 2, 34, 17, 10, 16, 28], 34);
