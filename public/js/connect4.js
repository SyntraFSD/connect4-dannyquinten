// html elements
var mainElement = document.querySelector('.board'); // colors object

var colors = {
  empty: 'empty',
  red: 'red',
  yellow: 'yellow'
};
var state = {
  turn: colors.yellow,
  board: [['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty']],
  winner: false,
  full: false
};

function generateBoardHtml(board) {
  return board.reduce(function (colsHtml, col, colIndex) {
    var colHtml = '<div class="col" data-index="' + colIndex + '">';
    colHtml += col.reduce(function (rowsHtml, row, rowIndex) {
      return '<div class="row" data-color="' + row + '" data-winner="false"></div>' + rowsHtml;
    }, '');
    colHtml += '</div>';
    return colsHtml + colHtml;
  }, '');
}

function drawBoard(board, turn, htmlElement) {
  htmlElement.innerHTML = '';
  var boardElement = document.createElement('div');
  boardElement.id = 'board';
  boardElement.dataset.turn = turn;
  boardElement.innerHTML = generateBoardHtml(board); // Made the same function with foreach
  // board.forEach((col, colIndex) => {
  //   const colElement = document.createElement('div');
  //   colElement.classList.add('col');
  //   colElement.dataset.index = colIndex;
  //   col.forEach((row, rowIndex) => {
  //     const rowElement = document.createElement('div');
  //     rowElement.classList.add('row');
  //     rowElement.dataset.color = colors.empty;
  //     if (colIndex%2 === 1) {
  //       rowElement.dataset.color = colors.red;
  //     } else if (rowIndex === 2 || rowIndex === 3) {
  //       rowElement.dataset.color = colors.yellow;
  //     }
  //     rowElement.dataset.winner = 'false';
  //     colElement.appendChild(rowElement);
  //   });
  //   boardElement.appendChild(colElement);
  // });

  htmlElement.appendChild(boardElement);
  return boardElement;
} //  initial state of the game


function initGameState() {
  state.turn = colors.yellow;
  state.board = [['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'], ['empty', 'empty', 'empty', 'empty', 'empty', 'empty']];
  state.winner = false;
  state.full = false;
} //  reset function, used if the board is full or you won the game


function resetGame() {
  initGameState();
  drawBoard(state.board, state.turn, mainElement);
}

function indexOfFirstEmptySquare(squareArray) {
  for (var i = 0; i < squareArray.length; i++) {
    if (squareArray[i] === colors.empty) {
      return i;
    }
  }

  return false;
}

function fullBoard() {
  state.full = state.board.reduce(function (full, col) {
    if (full) {
      return col.reduce(function (fullCol, row) {
        if (row === colors.empty) {
          fullCol = false;
        }

        return fullCol;
      }, true);
    }

    return full;
  }, true);
}

function changeTurn() {
  if (state.turn === colors.yellow) {
    state.turn = colors.red;
  } else {
    state.turn = colors.yellow;
  }

  boardDraw.dataset.turn = state.turn;
}

function dropStone(event) {
  if (event.target.matches('.row,.col')) {
    var clickedHtmlCol = event.target.closest('.col');
    var colIndex = parseInt(clickedHtmlCol.dataset.index);
    var rowIndex = indexOfFirstEmptySquare(state.board[colIndex]);
    fullBoard();

    if (state.full) {
      resetGame();
    } else if (rowIndex !== false) {
      state.board[colIndex][rowIndex] = state.turn;
      changeTurn();
      drawBoard(state.board, state.turn, mainElement);
    }
  }
}

initGameState();
var boardDraw = drawBoard(state.board, state.turn, mainElement);
mainElement.addEventListener('click', dropStone);
//# sourceMappingURL=connect4.js.map