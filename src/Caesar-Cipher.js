// Caesar Cipher
// Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer. If necessary, the shifting should wrap around back to the beginning or end of the alphabet.
function caesarCipher(str,num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';

  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];
  };
  return newString;
}
caesarCipher('Rodney Hammad', 2);

// OR

// Like:
describe("Caesar Cipher", () => {
  it("Should shift to the right", () => {
   assert.equal(caesarCipher("I love JavaScript!", 100), "E hkra FwrwOynelp!");
  });
 it("Should shift to the left", () => {
   assert.equal(caesarCipher("I love JavaScript!", -100), "M pszi NezeWgvmtx!");
  });
 });


// Analysis:

// Firstly, we will need to create an array of alphabet characters in order to calculate the result of shifting a character. This means we need to lowercase the input string before iterating through its characters. We should use a regular for loop to easily keep track of the current index. We will need to build up a new string that contains the shifted characters per iteration. When we meet a non-alphabetic character, we should immediately append it to the end of our solution string and use the continue statement to skip ahead to the next iteration. The key insight is to realize that we can use the modulus operator to mimic the behavior of wrapping around to the beginning or end of the alphabet array when the shifting is more than 26. Lastly, we need to check for capitalization in the original string before appending the result to our solution.

// Since every character in the input string needs to be visited and a new string needs to be created from it, this algorithm has a linear time and space complexity.