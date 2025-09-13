//       Chapter  21 to 25

// Qno:1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;

console.log("Hello" + fullName + "! Welcome." );

// Qno:2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser. 
var favMobile = prompt("Enter your favorite mobile phone model:");
var lengthOfInput = favMobile.length;

console.log("My favorite phone is: " + favMobile);
console.log("Length of string: " + lengthOfInput);

// Qno:3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.
var word = "Pakistani";
var index = word.indexOf("n");

console.log("String: " + word);
console.log("Index of 'n': " + index);

// Qno:4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
var word = "Hello World";
var lastIndex = word.lastIndexOf("l");

console.log("String: " + word);
console.log("Last index of 'l': " + lastIndex);

// Qno:6. Repeat Q1 using string concat() method.
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);

console.log("Hello " + fullName + "!");

// Qno:7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");

console.log("After replacement: " + newCity);

// Qno:8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.var message = “Ali and Sami are best friends. They play cricket and football together.”;

var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replaceAll("and", "&");

console.log("After replacement: " + newMessage);

// Qn0:9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
var str = "472";         
console.log("Value (string):", str);
console.log("Type:", typeof str);

var num = Number(str);    
console.log("Value (number):", num);
console.log("Type:", typeof num);

// Qno:10. Write a program that takes user input. Convert and show the input in capital letters.
var userInput = prompt("Enter some text:"); 
var capitalInput = userInput.toUpperCase();  

console.log("User Input:", userInput);
console.log("Upper Case:", capitalInput);

// Qno:11. Write a program that takes user input. Convert and show the input in title case.
var userInput = prompt("Enter any text:");  
var words = userInput.toLowerCase().split(" "); 

for (var i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
var titleCase = words.join(" ");  

console.log("User Input: " + userInput);
console.log("Title Case: " + titleCase);

// Qno:12. Write a program that converts the variable num to string.var num = 35.36 ; Remove the dot to display “3536” display in your browser.
var num = 35.36;
var str = num.toString();
var result = str.replace(".", "");

console.log("Number: " + num);
console.log("Result: " + result);

// Qno:13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username.For character codes of [@ .

var username = prompt("Enter your username:");

if (username.indexOf("@") !== -1 || 
    username.indexOf(".") !== -1 || 
    username.indexOf(",") !== -1 || 
    username.indexOf("!") !== -1) {

    alert("Please enter a valid username (no @ . , ! allowed)");
} 
else {
    console.log("Your username is: " + username);
}

// Qno:14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]. Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order?");

var lowerInput = userInput.toLowerCase();
var isFound = false;

for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === lowerInput) {
        isFound = true;
        break;
    }
}

if (isFound) {
    alert(userInput + " is available at index " + i + " in our bakery.");
} else {
    alert("We are sorry, " + userInput + " is not available in our bakery.");
}

// Qno:15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,prompt the user to enter a valid password.For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
var password = prompt("Enter your password:");

var hasLetter = false;
var hasNumber = false;

if (password.length < 6) {
    alert("Invalid password\nIt must be at least 6 characters long.");
} 

else if (!isNaN(password.charAt(0))) {
    alert("Invalid password\nIt should not start with a number.");
} 
else {

    for (var i = 0; i < password.length; i++) {
        var char = password.charAt(i);

        if (/[a-zA-Z]/.test(char)) {
            hasLetter = true;
        }
        if (/[0-9]/.test(char)) {
            hasNumber = true;
        }
    }

    if (hasLetter && hasNumber) {
        alert("Password is valid!");
    } else {
        alert("Invalid password\nIt must contain both alphabets and numbers.");
    }
}

// Qno:16. Write a program to convert the following string to an array using string split method.var university = “University of Karachi”; Display the elements of array in your browser.
var university = "University of Karachi";

var arr = university.split("");

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Qno:17. Write a program to display the last character of a user input.
var userInput = prompt("Enter any text:");

var lastChar = userInput[userInput.length - 1];

console.log("User input: " + userInput);
console.log("Last character: " + lastChar);

// Qno:18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
var str = "The quick brown fox jumps over the lazy dog";

var lowerStr = str.toLowerCase();

var words = lowerStr.split(" ");
var count = 0;

for (var i = 0; i < words.length; i++) {
  if (words[i] === "the") {
    count++;
  }
}

console.log("Text: " + str);
console.log("There are " + count + " occurrence(s) of word 'the'");

                 //    THE END




