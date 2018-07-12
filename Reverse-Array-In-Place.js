//Integer Reversal
// Given an integer, reverse the order of the digits.
function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  return arr;
}
reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]);

// OR

describe("Integer Reversal", () => {
  it("Should reverse integer", () => {
   assert.equal(reverse(1234), 4321);
   assert.equal(reverse(-1200), -21);
  });
 });