// Fizz Buzz
// Given a number as an input, print out every integer from 1 to that number. 
// However, when the integer is divisible by 2, print out “Fizz”; 
// when it’s divisible by 3, print out “Buzz”; 
// when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

function fizzBuzz(n){
  for (let i = 1; i <= n; i++){
    if (i % 3 === 0 && i % 5 ===0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 ===0) console.log('Buzz');
    else console.log(i);
  }
}
fizzBuzz(30);

// OR 

// Like:
function fizzBuzz (num) {
  for (var i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 ===0) console.log('AllGood');
    else if (i % 3 === 0) console.log('fizz');
    else if (i % 5 ===0) console.log('Buzz');
    else console.log(i);
  }
}
fizzBuzz(20)

// OR

// LIke:
describe("Fizz Buzz", () => {
  beforeEach(() => (output = fizzBuzz(30)));
  it("Should output number", () => {
   assert.equal(output[0], 1);
  });
  it("Should output Fizz", () => {
   assert.equal(output[1], "Fizz");
  });
  it("Should output Buzz", () => {
   assert.equal(output[2], "Buzz");
  });
  it("Should output Fizz Buzz", () => {
   assert.equal(output[5], "Fizz Buzz");
  });
 });