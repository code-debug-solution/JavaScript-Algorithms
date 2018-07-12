// Max Character
// Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
    it("Should return max character", () => {
     assert.equal(max("Hello World!"), "l");
    });
   });

// Analysis:

// The trick is to create a table that tallies the appearance of each character as we loop through the string. 
// This table can be created using an object literal where the characters are keys and the counters are values. 
// Then, we can iterate through the table to find the character that has the largest counter by keeping temporary 
//variables for its key and value.

// Though we use two separate loops that iterate through two different inputs (character string and character map), 
//the time complexity is still linear. It may be derived from the character string, but eventually, the size of the 
//character map will reach a limit because there’s only a finite number of characters in any language. For the same 
//reason, the space complexity is constant despite how the input string grows even though an internal state is kept. 
// Temporary primitives are also negligible at large scales.