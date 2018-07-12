// Vowels
// Given a string of words or phrases, count the number of vowels.
describe("Vowels", () => {
    it("Should count vowels", () => {
     assert.equal(vowels("hello world"), 3);
    });
   });

// Analysis:

// The easiest solution is to take advantage of regular expressions to extract all the vowels and then count them. If regular expressions are not allowed, we can simply loop through every character and check it against a collection of vowels. The string should be lowercased first.

//Both approaches have linear time complexity and constant space complexity because every character needs to be checked and temporary primitives are negligible.