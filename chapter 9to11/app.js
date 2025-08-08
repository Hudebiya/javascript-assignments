//  Chapter 9 to 11

// Qno:1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
var cityName= "Karachi"
var userCity= prompt("Enter your city name:")
if (cityName==userCity){
    console.log("Welcome to the City of Lights")
}

// Qno:2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
var gender = prompt("Enter your gender (male/female)");

if (gender === "male") {
    alert("Good Morning Sir");
} else if (gender === "female") {
    alert("Good Morning Ma'am");
} else {
    alert("Please enter a valid gender (male/female)");
}

// Qno:3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
var signalColor = prompt("Enter traffic signal color (Red, Yellow, Green)");

if (signalColor === "Red") {
    alert("Must Stop");
} else if (signalColor === "Yellow") {
    alert("Ready to move");
} else if (signalColor === "Green") {
    alert("Move now");
} else {
    alert("Invalid color. Please enter Red, Yellow, or Green.");
}

// Qno:4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
var remainingFuel = prompt("Enter remaining fuel in your car (in litres)");

if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
} else {
    alert("Fuel level is sufficient");
}
 
// Qno:5. Run this script, & check whether alert message would bedisplayed or not. Record the outputs.a. var a = 4;if (++a === 5){alert("given condition for variable a is true");}User Input & Conditional Statement | JAVASCRIPT Page 2 of 4b. var b = 82;if (b++ === 83){alert("given condition for variable b is true");}
// c. var c = 12;if (c++ === 13){alert("condition 1 is true");}if (c === 13){alert("condition 2 is true");}if (++c < 14){alert("condition 3 is true");}if(c === 14){alert("condition 4 is true");}
// d. var materialCost = 20000;var laborCost = 2000;var totalCost = materialCost + laborCost;if (totalCost === laborCost + materialCost){alert("The cost equals");}e. if (true){alert("True");}if (false){alert("False");}User Input & Conditional Statement | JAVASCRIPTPage 3 of 4f. if("car" < "cat"){alert("car is smaller than cat");}
var a = 4;
if (++a === 5){
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
  alert("given condition for variable b is true");
}
var b = 82;
if (b++ === 83){
  alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
  alert("condition 1 is true");
}
if (c === 13){
  alert("condition 2 is true");
}
if (++c < 14){
  alert("condition 3 is true");
}
if(c === 14){
  alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
  alert("The cost equals");
}

if (true){
  alert("True");
}
if (false){
  alert("False");
}

if("car" < "cat"){
  alert("car is smaller than cat");
}

// Qno:6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: Show the total marks, marks obtained, percentage, grade & remarks like:
var sub1 = prompt("Enter name of subject 1:");
var sub2 = prompt("Enter name of subject 2:");
var sub3 = prompt("Enter name of subject 3:");

var marks1 = +prompt("Enter obtained marks for " + sub1);
var marks2 = +prompt("Enter obtained marks for " + sub2);
var marks3 = +prompt("Enter obtained marks for " + sub3);

var totalMarks = 300;
var obtainedMarks = marks1 + marks2 + marks3;

var percentage = (obtainedMarks / totalMarks) * 100;

var grade = "";
var remarks = "";

if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else {
  grade = "Fail";
  remarks = "Sorry";
}

document.write("<h2>Marks Sheet</h2>");
document.write("<table border='1' cellpadding='10'>");
document.write("<tr><td>Total Marks</td><td>" + totalMarks + "</td></tr>");
document.write("<tr><td>Marks Obtained</td><td>" + obtainedMarks + "</td></tr>");
document.write("<tr><td>Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>");
document.write("<tr><td>Grade</td><td>" + grade + "</td></tr>");
document.write("<tr><td>Remarks</td><td>" + remarks + "</td></tr>");
document.write("</table>");

// Qno:7. Guess game:Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.a. If user guesses the same number, show “Bingo! Correctanswer”.b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
var secretNumber = 7; 
var userGuess = +prompt("Guess the secret number (between 1 and 10)");

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Try again!");
}

// Qno:8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
var number = +prompt("Enter a number to check if it's divisible by 3");

if (number % 3 === 0) {
    alert("Yes! The number is divisible by 3.");
} else {
    alert("No, the number is not divisible by 3.");
}

// Qno:9. Write a program that checks whether the given input is an even number or an odd number.
var number = +prompt("Enter a number to check if it's even or odd");

if (number % 2 === 0) {
    alert("The number is even.");
} else {
    alert("The number is odd.");
}

// Qno:10. Write a program that takes temperature as input and shows a message based on following criteriaa. T > 40 then “It is too hot outside.”b. T > 30 then “The Weather today is Normal.”c. T > 20 then “Today’s Weather is cool.”d. T > 10 then “OMG! Today’s weather is so Cool.”
var temperature = +prompt("Enter the temperature in °C");

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It's very cold today.");
}

// Qno:11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user.
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var operator = prompt("Enter operator (+, -, *, /, %):");

var result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Cannot divide by zero";
    }
} else if (operator === "%") {
    result = num1 % num2;
} else {
    result = "Invalid operator!";
}

document.write("<h2>Result: " + result + "</h2>");
   
                //  THE END