//Given a string of characters as input, write a function that returns it with the characters reversed.
describe("String Reversal", () => {
  it("Should reverse string", () => {
   assert.equal(reverse("Hello World!"), "!dlroW olleH");
  });
 });

// OR

function reverseWords(string) {
  let wordsArr = string.split(' ');
  let reverseWordsArr = [];

  wordsArr.forEach(word => {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--){
      reverseWord += word[i];
    };
    reverseWordsArr.push(reverseWord);
  });
  return reverseWordsArr.join(' ');
} 

reverseWords('Coding JavaScript');