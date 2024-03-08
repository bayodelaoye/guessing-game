const { maxHeaderSize } = require("http");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// let secretNumber = randomInRange(min, max);

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

// const askRange = () => {
//   rl.question("Enter a max number: ", (maxAnswer) => {
//     rl.question("Enter a min number: ", (minAnswer) => {
//       minUserAnswer = minAnswer;
//       maxUserAnswer = maxAnswer;
//       console.log(
//         `I'm thinking of a number between ${minAnswer} and ${maxAnswer}...`
//       );
//       secretNumber = randomInRange(minAnswer, maxAnswer);
//       askGuess();
//     });
//   });
// };

const randomInRange = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  // return Math.floor(Math.random() * (max - min) + min);
};

const askRangeMax = () => {
  rl.question("Enter a max number: ", (maxAnswer) => {
    askRangeMin(maxAnswer);
  });
};

const askRangeMin = (maxAnswer) => {
  rl.question("Enter a min number: ", (minAnswer) => {
    secretNumber = randomInRange(minAnswer, maxAnswer);
    console.log(
      `I'm thinking of a number between ${minAnswer} and ${maxAnswer}...`
    );
    askGuess();
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

askRangeMax();
