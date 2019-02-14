// html elements
const connectBoard = document.querySelector('#board');
const board = [
  [0, 1, 2, 3, 4, 5],
  [0, 1, 2, 3, 4, 5],
  [0, 1, 2, 3, 4, 5],
  [0, 1, 2, 3, 4, 5],
  [0, 1, 2, 3, 4, 5],
  [0, 1, 2, 3, 4, 5],
  [0, 1, 2, 3, 4, 5],
];

function drawBoard() {

  board.forEach((col,colIndex) => {
    const colElement = document.createElement('div');
    colElement.classList.add('col');
    colElement.dataset.index = colIndex;
    col.forEach((value, rowIndex) => {
      const rowElement = document.createElement('div');
      rowElement.classList.add('row');
      rowElement.dataset.color = 'empty';
      if (colIndex%2 === 1) {
        rowElement.dataset.color = 'red';
      } else if(rowIndex === 2 || rowIndex === 3){
        rowElement.dataset.color = 'yellow';
      }
      rowElement.dataset.winner = 'false';
      colElement.appendChild(rowElement);
    });
    connectBoard.dataset.turn = 'yellow';
    connectBoard.appendChild(colElement);
  });
}
drawBoard();
