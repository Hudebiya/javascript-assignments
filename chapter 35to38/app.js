               //     CHAPTER  35 To 38

// Qno:1. Write a function that displays current date & time in your browser.
function showCurrentDateTime() {
    var now = new Date();               
    console.log("Current Date & Time: " + now);
}

showCurrentDateTime();

// Qno:2. Write a function that takes first & last name and then it greets the user using his full name.
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;   
    console.log("Hello, " + fullName + "! Welcome!");
}

greetUser("Ali", "Ahmed");

// Qno:3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
function addNumbers() {
    var num1 = +prompt("Enter first number:");   
    var num2 = +prompt("Enter second number:");
    var sum = num1 + num2;                       
    return sum;                                   
}

var result = addNumbers();
console.log("The sum of the two numbers is: " + result);

// Qno:4. Calculator:Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
function calculator(num1, num2, operator) {
    var result;

    if (operator === "+") {
        result = num1 + num2;
    } 
    else if (operator === "-") {
        result = num1 - num2;
    } 
    else if (operator === "*") {
        result = num1 * num2;
    } 
    else if (operator === "/") {
        result = num1 / num2;
    } 
    else if (operator === "%") {
        result = num1 % num2;
    } 
    else {
        result = "Invalid Operator!";
    }

    return result;   
}

var firstNum  = +prompt("Enter first number:");
var secondNum = +prompt("Enter second number:");
var op        = prompt("Enter operator (+, -, *, /, %):");

var answer = calculator(firstNum, secondNum, op);
console.log("Result: " + answer);

// Qno:5. Write a function that squares its argument.
function square(num) {
    return num * num;   
}

var userNum = +prompt("Enter a number to square:");

console.log("Square of " + userNum + " is: " + square(userNum));

// Qno:6. Write a function that computes factorial of a number.
function factorial(num) {
    var result = 1;           
    for (var i = 1; i <= num; i++) {
        result = result * i;  
    }
    return result;            
}

var userNum = +prompt("Enter a number to find factorial:");

console.log("Factorial of " + userNum + " is: " + factorial(userNum));

// Qno:7. Write a function that take start and end number as inputs & display counting in your browser.
