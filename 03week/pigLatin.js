'use strict';

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

console.log("I'm here!");

function pigLatin(word) {
  word = word.trim().toLowerCase();
  let word2 = word;
  let append;

  function isVowel(char) {
    const vowels = ["a", "e", "i", "o", "u", "y"];
    return vowels.includes(char);
  }
  
if (isVowel(word[0])) {
  append = "way";
} else {
for (let i = 1; i < word.length && !append; i++) {
  if (isVowel(word[i])) {
    append = word.slice(0, i) + "ay";
    word2 = word.slice(i);
  }
}
}
return word2 + append;
}

function handleTranslate() {
    console.log("I'm inside handleTranslate()");
// 1. get the input value from the inputbox
var inputBox = document.getElementById("plainText");
console.log(inputBox);
var englishWord = inputBox.value;
console.log("english word", englishWord);
//2. call the pigLatin function with this value
var pigLatinWord = pigLatin(englishWord)
console.log("pig latin word", pigLatinWord);

//3. write the result that the pigLatin function returns to the screen
var spanElement = document.getElementById("pigLatinText");
console.log("spanElement", spanElement);
spanElement.innerText = pigLatinWord;

}
function getPrompt() {
  rl.question('Please enter a word to convert to pig latin: ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "way" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggway');
      assert.equal(pigLatin('emission'), 'emissionway');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  //getPrompt();

}