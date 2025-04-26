const cells = document.querySelectorAll(".cell");
let currentPlayer = "X"; 
let gameOver = false;

function handleClick(event) {
  const cell = event.target;

  if (cell.textContent || gameOver) return;

  cell.textContent = currentPlayer;
  if (checkWinner()) {
    setTimeout(() => alert(`${currentPlayer} wins!`), 100);
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
      return true;
    }
  }
  return false;
}

function resetGame() {
  cells.forEach(cell => cell.textContent = "");
  gameOver = false;
  currentPlayer = "X";
}

cells.forEach(cell => cell.addEventListener("click", handleClick));
