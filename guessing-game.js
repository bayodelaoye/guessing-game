const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let secretNumber = 7;

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
const askGuess = () => {
  rl.question("Enter a guess: ", (input) => {
    console.log(input);
    if (checkGuess(Number(input))) {
      rl.close();
    } else {
      askGuess();
    }
  });
};

askGuess();
