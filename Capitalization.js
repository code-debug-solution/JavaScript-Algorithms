// Capitalization
// Given a phrase, capitalize every word.
describe("Capitalization", () => {
    it("Should capitalize phrase", () => {
     assert.equal(capitalize("hello world"), "Hello World");
    });
   });


// Analysis:

// One approach is to loop through every character, and when the previous character is a space, apply toUpperCase to capitalize the current character. Because string literals are immutable in JavaScript, we will need to rebuild the input string with the appropriate capitalizations. This approach requires us to always capitalize the first character. Perhaps a cleaner approach is to split the input string into an array of words. Then, we can loop through this array and capitalize the first characters, before joining the words back together again. For the same reason of immutability, we will need to hold in memory a temporary array that contains the appropriate capitalizations.

// Both approaches have a linear time complexity because every character is visited at least once. They also have a linear space complexity because a temporary variable is kept which grows proportionally to the input string.