function isPalindrom(string) {
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  return lettersArr.join('') === lettersArr.reverse().join('');
}

isPalindrom("Madam, I'm Adam");

// A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.
describe("Palindrome", () => {
  it("Should return true", () => {
   assert.equal(isPalindrome("Cigar? Toss it in a can. It is so tragic"), true);
  });
  it("Should return false", () => {
   assert.equal(isPalindrome("sit ad est love"), false);
  });
 });