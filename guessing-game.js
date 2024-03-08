const { maxHeaderSize } = require("http");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkGuess(num) {
  if (num > secretNumber) {
    console.log("Too high.");
    return false;
  } else if (num < secretNumber) {
    console.log("Too low.");
    return false;
  } else if (num === secretNumber) {
    console.log("Correct!");
    return true;
  }
}

let secretNumber;

const randomInRange = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

const askRange = () => {
  rl.question("Enter a max number: ", (maxAnswer) => {
    rl.question("Enter a min number: ", (minAnswer) => {
      console.log(
        `I'm thinking of a number between ${minAnswer} and ${maxAnswer}...`
      );
      secretNumber = randomInRange(minAnswer, maxAnswer);
      askGuess();
    });
  });
};

const askGuess = () => {
  rl.question("Enter a guess: ", (input) => {
    if (checkGuess(Number(input))) {
      rl.close();
    } else {
      askGuess();
    }
  });
};

askRange();
