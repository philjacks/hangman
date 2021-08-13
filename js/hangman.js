class Hangman {
  constructor(word, attempts) {
    this.word = word.toLowerCase().split("");
    this.attempts = attempts;
    this.guessedLetters = [];
    this.status = "playing";
  }
  gameStatus() {
    let finished = this.word.every(
      (letter) => this.guessedLetters.includes(letter) || letter === " "
    );
    if (this.attempts === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }
  get puzzle() {
    let puzzle = "";

    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });

    return puzzle;
  }
  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    const warning = () => {
      const warning = document.querySelector("#warning");
      if (!isUnique) {
        warning.innerHTML = `You've already used this letter`;
        warning.classList.add("warning-text");
      }
    };

    const removeWarning = () => {
      document.querySelector("#warning").innerHTML = ``;
    };

    warning();
    setTimeout(removeWarning, 3000);

    if (this.status !== "playing") {
      return;
    }
    if (isUnique) {
      this.guessedLetters.push(guess);
    }
    if (isUnique && isBadGuess) {
      this.attempts--;
    }
    this.gameStatus();
  }
  get statusMessage() {
    const message = document.getElementById("end-message");
    const counter = document.querySelector("#counter");

    if (this.status === "playing") {
      counter.innerHTML = `Guesses left: ${this.attempts}`;
    } else if (this.status === "failed") {
      message.innerHTML = `Nice try, the word was '${this.word
        .join("")
        .toUpperCase()}'`;
      counter.innerHTML = `Guesses left: ${this.attempts}`;

      message.classList.add("fail-text");
    } else if (this.status === "finished") {
      message.innerHTML = `Well done! You got it right!`;
      counter.innerHTML = `Guesses left: ${this.attempts}`;
      message.classList.remove("fail-text");
      message.classList.add("win-text");
    }
  }
}
