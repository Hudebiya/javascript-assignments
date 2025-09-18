//              CHAPTER   26 to 30

// Qno:1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num = +prompt("Enter a positive integer:");

console.log("Number: " + num);
console.log("Round off value: " + Math.round(num));
console.log("Floor value: " + Math.floor(num));
console.log("Ceil value: " + Math.ceil(num));

// Qno:2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num = +prompt("Enter a negative floating point number:");

console.log("Number: " + num);
console.log("Round off value: " + Math.round(num));
console.log("Floor value: " + Math.floor(num));
console.log("Ceil value: " + Math.ceil(num));

// Qno:3. Write a program that displays the absolute value of anumber. E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var num = +prompt("Enter a number:");
var absoluteValue = Math.abs(num);

console.log("The absolute value of " + num + " is " + absoluteValue);

// Qno:4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in yourbrowser.:

var diceValue = Math.floor(Math.random() * 6) + 1;

console.log("Random dice value: " + diceValue);

// Qno:5. Write a program that simulates a coin toss using random()method of JS Math class. Display the value of coin in your browser

var toss = Math.floor(Math.random() * 2);

if (toss === 0) {
  console.log("Random coin value: Heads");
} else {
  console.log("Random coin value: Tails");
}

// Qno:6. Write a program that shows a random number between 1 and 100 in your browser.

var randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("Random number between 1 and 100: " + randomNumber);

// Qno:7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var userInput = prompt("Enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilograms)");
var weight = parseFloat(userInput);

console.log("The weight of user is " + weight + " kilograms");

// Qno:8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess a number between 1 and 10"));

if (userGuess === secretNumber) {
    console.log("Congratulations! You guessed the correct number.");
} else {
    console.log("Sorry, wrong guess! The secret number was " + secretNumber);
}

                  //   THE END