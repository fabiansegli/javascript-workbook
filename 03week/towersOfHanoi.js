'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // Your code here
  let grabbed = stacks[startStack].pop();
  stacks[endStack].push(grabbed);

}

function isLegal(startStack, endStack) {
  // Your code here
  let start = stacks[startStack];
  let startIndex = start.length -1;
 // start[startIndex]
 let end = stacks[endStack];
 let endIndex = end.length -1;
 if(start[startIndex] < end[endIndex] || end.length == 0) {
   return true;
 } else {
   console.log("Ilegal move!!");
 }
}

function checkForWin() {
  // Your code here
  if(stacks['b'].length === 4 || stacks['c'].length === 4) {
    console.log("Big winner!")
    return true;
  }

}

function towersOfHanoi(startStack, endStack) {
  // Your code here
     if (isLegal(startStack, endStack) === true) {
      movePiece(startStack, endStack);
     checkForWin(startStack, endStack);
  }

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
