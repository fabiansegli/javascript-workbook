let game = ['-','-','-','-','-','-','-','-','-']
let turn = 'X'

const win = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
]

const play = function(boxNumber){

  let box = document.getElementById('box'+boxNumber)

  if (box.textContent === '-') {

    box.textContent = turn
    box.style.color = '#444'
    game[boxNumber - 1] = turn

    for (let i = 0; i < win.length; i++) {
      const match1 = game[win[i][0]-1]
      const match2 = game[win[i][1]-1]
      const match3 = game[win[i][2]-1]
      if (match1 === turn && match2 === turn && match3 === turn) {
        const title = document.getElementById('box5')
        const gameBoard = document.getElementById('container')
        gameBoard.style.pointerEvents = 'none'
        gameBoard.style.backgroundColor = 'goldenrod'
        gameBoard.style.boxShadow = '0 0 10px 15px goldenrod'
        title.textContent = turn + ' WINS!'
      }
    }

    if (turn === 'X') {
      turn = 'O'
    } else {
      turn = 'X'
    }
    console.log(game, turn)
  }
}