// Ransom Note
// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.
function harmlessRamsomeNote (noteText, magazineText) {
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });
  
  var noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    }
    else noteIsPossible = false;
  });

  return noteIsPossible;
}

harmlessRamsomeNote('this is a secret note from a secret admirer', 'this returned metainformation in the entity-header is not a definitive secret set as available from origin note server, but is gathered from a local secret or a third-party copy admirer');

// Or

// Like:
const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
describe("Ransom Note", () => {
 it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint", magazine), true);
 });
it("Should return false", () => {
  assert.equal(ransomNote("sit ad est love", magazine), false);
 });
it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint in in", magazine), true);
 });
it("Should return false", () => {
  assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
 });
});

// Analysis:

// An obvious solution is to split the magazine words and ransom words into arrays of individual words, and then check every ransom word against every magazine word. However, this approach scales in quadratic time, or O(n * m) which is not performant. If we create a table of magazine words first, and then check each ransom word against this table, we can achieve linear time. This is because table lookup in map objects occurs in constant time. However, we will need to sacrifice space complexity in order to hold the map object in memory.

// In code, this means we create a count of every magazine word, and then check if this “hash table” contains the right number of ransom words.