# tic-tac-toe
### JavaScript Explanation:

```javascript
const cells = document.querySelectorAll(".cell");
let currentPlayer = "X"; // X starts first
let gameOver = false;
```
- `cells`: Yeh `querySelectorAll(".cell")` se humne saare `.cell` class wale divs ko select kiya hai. In cells par players apni moves karenge.
- `currentPlayer`: Is variable mein current player ka value store hota hai. Pehle player `X` hota hai.
- `gameOver`: Is variable ka use hum yeh check karne ke liye karte hain ke game khatam ho gaya hai ya nahi.

---

#### Handle Click Event:
```javascript
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
```
- `handleClick` function ko har cell ke `click` event par call kiya jata hai.
- `const cell = event.target;`: Jab user kisi cell ko click karta hai, to wo cell select ho jata hai.
- `if (cell.textContent || gameOver) return;`: Agar cell mein kuch likha ho (jaise `X` ya `O` ho) ya game khatam ho gaya ho, to function kuch nahi karega.
- `cell.textContent = currentPlayer;`: Current player ka symbol (yaani `X` ya `O`) cell mein set kiya jata hai.
- `if (checkWinner())`: Ab hum check karte hain ke koi winner hai ya nahi. Agar winner hai, to `gameOver` ko `true` set kar dete hain aur alert show karte hain ke kisne jeet liya.
- `currentPlayer = currentPlayer === "X" ? "O" : "X";`: Yeh line current player ko toggle karti hai. Agar current player `X` hai, to `O` ho jayega aur vice versa.

---

#### Check Winner Function:
```javascript
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
```
- `winPatterns`: Yeh ek array hai jisme 8 different winning patterns store kiye hain. Har pattern mein 3 indices hoti hain jo jeetne wale cells ko represent karti hain.
- `for (let pattern of winPatterns)`: Hum har winning pattern ko loop kar rahe hain.
- `const [a, b, c] = pattern;`: Hum pattern mein se 3 indices ko variable `a`, `b`, aur `c` mein store kar rahe hain.
- `if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent)`: Agar in teeno cells ka content (yaani "X" ya "O") match karta ho to function `true` return karega, jo indicate karega ke game ka winner mil gaya hai.
- Agar koi winner nahi milta, to `false` return hota hai.

---

#### Reset Game:
```javascript
function resetGame() {
  cells.forEach(cell => cell.textContent = "");
  gameOver = false;
  currentPlayer = "X";
}
```
- `resetGame` function game ko reset karta hai.
- `cells.forEach(cell => cell.textContent = "");`: Is line se saare cells ko khali kar diya jata hai.
- `gameOver = false;`: Game ka status phir se `false` ho jata hai, taake game dobara khela ja sake.
- `currentPlayer = "X";`: Pehle player ko `X` set kiya jata hai.

---

#### Event Listener:
```javascript
cells.forEach(cell => cell.addEventListener("click", handleClick));
```
- Yeh line har cell ke saath `click` event ko bind karti hai, aur jab bhi user kisi cell ko click karega, `handleClick` function call hoga.

---

Is tarah se yeh code kaam karta hai! Har player ko apni turn par cell select karna hota hai. Jab koi player 3 continuous cells mein apna symbol laga leta hai (horizontally, vertically, ya diagonally), to wo jeet jata hai. Aur jab game khatam hota hai, aap `Reset Game` button se game ko dobara start kar sakte hain.

