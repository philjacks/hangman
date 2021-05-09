const puzzleEl = document.querySelector("#word");
const countEl = document.querySelector("#counter");
let round1;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  round1.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.innerHTML = "";
  countEl.textContent = round1.attempts;

  round1.puzzle.split("").forEach(letter => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
  round1.statusMessage;
};

const startGame = async () => {
  const puzzle = await getPuzzle("1");
  round1 = new Hangman(puzzle, 8);
  render();
  document.querySelector("#end-message").innerHTML = "";
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();

// getPuzzle("2")
//   .then(puzzle => {
//     console.log(puzzle);
//   })
//   .catch(err => {
//     console.log(`Error: ${err}`);
//   });

// getCurrentCountry().then((country) => {
//   console.log(country.name)
// }).catch((err) => {
//   console.log(err)
// })
