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
function showCounting(start, end) {
    for (var i = start; i <= end; i++) {
        console.log(i);  
    }
}

var startNum = +prompt("Enter start number:");
var endNum = +prompt("Enter end number:");

showCounting(startNum, endNum);

// Qno: 8. Write a nested function that computes hypotenuse of a right angle triangle.Hypotenuse2 = Base2 + Perpendicular2.
// Take base and perpendicular as inputs.Outer function : calculateHypotenuse()Inner function: calculateSquare() ?
function calculateHyp(base,prep){
    function calculateSquare(x){
        return x**2
    }
    var hypSquare = calculateSquare(base)+ calculateSquare(prep)
    return hypSquare
}
console.log(calculateHyp(10,2));

// Qno: 9. Write a function that calculates the area of a rectangle.A = width * height.Pass width and height in following manner:
//i. Arguments as value.  ii. Arguments as variables?
function calculateArea(w,h){
    return w*h
}
console.log(calculateArea(10,5));
console.log(calculateArea(10,500));

var width = 10
var height = 20
console.log(calculateArea(height,width));
var width = 100
var height = 20
console.log(calculateArea(height,width));

// Qno:10. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
function checkPalindrome(str) {

    var cleanStr = str.toLowerCase().replace(/\s+/g, "");
    var reversed = cleanStr.split("").reverse().join("");

    if (cleanStr === reversed) {
        console.log(str + " is a palindrome");
    } else {
        console.log(str + " is NOT a palindrome");
    }
}

var userInput = prompt("Enter a word to check palindrome:");
checkPalindrome(userInput);

// Qno:11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// EXAMPLE STRING : 'the quick brown fox', EXPECTED OUTPUT : 'The Quick Brown Fox'
function titleCase(str) {

    var words = str.split(" "); 
    for (var i = 0; i < words.length; i++) {
        var firstLetter = words[i].charAt(0).toUpperCase(); 
        var remainingLetters = words[i].slice(1).toLowerCase(); 
        words[i] = firstLetter + remainingLetters; 
    }
    var result = words.join(" "); 
    console.log(result);
}

var userInput = prompt("Enter a sentence:");
titleCase(userInput);

// Qno:12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial' , EXPECTED OUTPUT : 'Development'
function findLongestWord(str) {
    
    var words = str.split(" ");
    var longestWord = "";

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]; 
        }
    }
    console.log("Longest Word: " + longestWord);
    return longestWord;
}

var userInput = prompt("Enter a sentence:");
findLongestWord(userInput);

// Qno:13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o'
function countLetterOccurrences(str, letter) {
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }

    console.log("The letter '" + letter + "' occurs " + count + " times.");
    return count;
}

var text = prompt("Enter a string:", "JSResourceS.com");
var char = prompt("Enter a letter to count:", "o");
countLetterOccurrences(text, char);

// Qno:14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:• Pass the radius to the function. • Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea: • Pass the radius to the function. • Calculate the area based on the radius, and output "The area is NN". Circumference of circle = 2πr Area of circle = πr2
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;  
    console.log("The circumference is " + circumference.toFixed(2));
    return circumference;
}

function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);  
    console.log("The area is " + area.toFixed(2));
    return area;
}

var r = +prompt("Enter the radius of the circle:");
calcCircumference(r);
calcArea(r);

                  //   THE END