class Hangman {
  constructor(word, attempts) {
    this.word = word.toLowerCase().split("");
    this.attempts = attempts;
    this.guessedLetters = [];
    this.status = "playing";
  }
  gameStatus() {
    let finished = this.word.every(
      letter => this.guessedLetters.includes(letter) || letter === " "
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

    this.word.forEach(letter => {
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
    if (this.status === "playing") {
      document.querySelector("#counter").innerHTML = `Guesses left: ${this.attempts
        }`;
    } else if (this.status === "failed") {
      document.querySelector(
        "#end-message"
      ).innerHTML = `Nice try, the word was '${this.word.join("").toUpperCase()}'`;
      document.querySelector("#counter").innerHTML = `Guesses left: ${this.attempts
        }`;
      document.getElementById("end-message").classList.add("fail-text");
    } else if (this.status === "finished") {
      document.querySelector(
        "#end-message"
      ).innerHTML = `Well done! You got it right!`;
      document.querySelector("#counter").innerHTML = `Guesses left: ${this.attempts
        }`;
      document.getElementById("end-message").classList.remove("fail-text");
      document.getElementById("end-message").classList.add("win-text");
    }
  }
}

