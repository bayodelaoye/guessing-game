# Guessing Game Project
## Phase I: Too High? Too Low? Who knows.
The objective for this project is to build a simple game where the user has to guess a secret number that is chosen at random. Upon making a guess, the user will receive a hint indicating if their guess is too small or too large. Below is an example of how the final product will play.

```
Enter a max number: 20
Enter a min number: 11
I'm thinking of a number between 11 and 20...
Enter a guess: 15
Too high.
Enter a guess: 11
Too low.
Enter a guess: 13
Too high.
Enter a guess: 12
Correct!
YOU WON.
```

### checkGuess
Define a function named checkGuess that accepts a number as an argument. It should compare that argument against the global secretNumber. It should have the following behavior:

* when the argument is larger than secretNumber, it should print 'Too high.' and return false

* when the argument is smaller than secretNumber, it should print 'Too low.' and return false

* when the argument is equal to secretNumber, it should print 'Correct!' and return true

### askGuess
Define a function named askGuess. The method should use the readline module's question method to ask the user to 'Enter a guess: '. If you need a refresher on how to use this method, check out the question docs. Once the user enters their number, the checkGuess function should be called with their number as an argument and the interface should be closed.

When accepting user input, there is a very important nuance to take into account. When the user enters their guess it will be interpreted as a string of numeric characters and not an actual number type! Depending on how you wrote your checkGuess function, this could be disastrous because:

``` console.log(42 === "42"); // false ```

To overcome this issue, we should explicitly turn their guess into a number before we pass it into checkGuess. You can do this by calling the Number function. Here's an example of Number in action:

```
let str = "42";
console.log(42 === Number(str)); // true
```

Here is how the askGuess function should flow:

* check the user's guess
* if it is correct, print out 'You win!' and close the interface
* if it is incorrect, call askGuess again

## Phase II: Making it Random
Now that we have the core gameplay down, we'll want to implement logic to allow the secretNumber to be chosen at random. To do this, we'll utilize the Math#random method. Take a look at the docs. The method returns a decimal number between 0 and 1 (excluding 1). For example:

```
console.log(Math.random()); // 0.5719957072947224
console.log(Math.random()); // 0.08590173924968769
console.log(Math.random()); // 0.0965770175443883
```

### randomInRange
Define a function called randomInRange that accepts a minimum and maximum number as arguments. The function should return a random whole number between the provided minimum and maximum (inclusive). Be sure to test your function, here is an example of how it might behave:

```
console.log(randomInRange(15, 20)); // 16
console.log(randomInRange(15, 20)); // 17
console.log(randomInRange(15, 20)); // 20
```

Once you have confirmed that your randomInRange function is returning numbers properly, edit your initialization of secretNumber. Instead of setting it to a hard-coded value, use your function's return value to set it to a random number between 0 and 100.

### askRange
Define a function called askRange. This method should ask the user to enter a minimum number and then ask them to enter a maximum number. We want to ask them for the maximum only after they have responded to the first question. This means you will have to use the question method twice! The question method is asynchronous, so how can we ask two questions one after the other? We'll leave the implementation to you. After the user enters their min and max, you should print a message confirming the range. Here is an example of how our askRange method behaves.

```
Enter a max number: _20_
Enter a min number: _11_
I'm thinking of a number between 11 and 20...
```

When the user enters both the min and the max, call your randomInRange function with that min and max as arguments. Recall that the user's input is automatically interpreted as strings and not numbers. You should explicitly turn the min and max to actual numbers before passing them in. Take the random number returned from your function and set that as the secretNumber. Then call your old askGuess method so that gameplay can begin. All of this should happen within the askRange function. We design it this way because we only want to ask for a guess after the random number has been chosen.

The askRange function is the "main" function that will begin our game, so you'll need call it once in the global scope. Run your program and play a few games!
