/* All methods below this paragraph are JavaScript methods that will be in the main.js file.Let's start with the playerFactory. The playerFactory will be the factory for players. Factories are like classes. You can also use class instead of factory but factories are preferred. You can read more about classes and factories here. The playerFactory will accept the player name and the mark ('X' or 'O'). It will have a method to play when it's the player's turn. The playTurn method will accept a board which will be the game board and the cell. It will find the index of the cell and return it if it's empty or it will return null if it's occupied. */

const playerFactory = (name, mark) => {
  const playTurn = (board, cell) => {
    const idx = board.cell.findIndex((position) => position === cell);
    if (board.boardArray[idx] === '') {
      board.render();
      return idx;
    }
    return null;
  };
  return { name, mark, playTurn };
};

/* Next, we will make the board module. A module is similar to a factory in JavaScript but they are like static classes. They can be called without being instantiated. We will have the board array to hold the 9 positions in the game. We will use DOM manipulation to select and the values of html elements. The render method will make the value of the html cells equal to the board array. The reset method will reset the board making all values to an empty string. The checkWin method will check the winning positions in a tictactoe game. For example, if you put continuous 'X' in a row, you will win. If we take the first row, that position will be the first, second and third. But since arrays start from zero, we will have to deduct one from each and it will be zero, one, two or [0, 1, 2] which you see as the first entry in the winArrays variable. The winArray variable is filled with all those positions and then it will check if they are occupied with the same value 'X' or 'O'. Of course, they should be all 'X' or 'O'. */

const boardModule = (() => {
  let boardArray = ['', '', '', '', '', '', '', '', ''];
  const gameBoard = document.querySelector('#board');
  const cells = Array.from(document.querySelectorAll('.cell'));
  let winner = null;

  const render = () => {
    boardArray.forEach((mark, idx) => {
      cells[idx].textContent = boardArray[idx];
    });
  };

  const reset = () => {
    boardArray = ['', '', '', '', '', '', '', '', ''];
  };

  const checkWin = () => {
    const winArrays = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winArrays.forEach((combo) => {
      if (
        boardArray[combo[0]] &&
        boardArray[combo[0]] === boardArray[combo[1]] &&
        boardArray[combo[0]] === boardArray[combo[2]]
      ) {
        winner = 'current';
      }
    });
    return winner || (boardArray.includes('') ? null : 'Tie');
  };

  return {
    render,
    gameBoard,
    cells,
    boardArray,
    checkWin,
    reset,
  };
})();
