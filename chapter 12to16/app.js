//  chapter 12 to 16

// Qno:1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
var char = prompt("Enter a character:"); 
var ascii = char.charCodeAt(0); 

if (ascii >= 48 && ascii <= 57) {
    console.log("It is a number.");
}
else if (ascii >= 65 && ascii <= 90) {
    console.log("It is an uppercase letter.");
}
else if (ascii >= 97 && ascii <= 122) {
    console.log("It is a lowercase letter.");
}
else {
    console.log("It is not a number or a letter.");
}

// Qno:2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
var num1 = parseInt(prompt("Enter first integer:"));
var num2 = parseInt(prompt("Enter second integer:"));

if (num1 > num2 || num2 < num1) {
    console.log("The larger number is: " + num1);
}
else if (num2 > num1 || num1 < num2) {
    console.log("The larger number is: " + num2);
}
else {
    console.log("Both numbers are equal.");
}
 
// Qno:3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var number = parseInt(prompt("Enter a number:"));

if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}

// Qno:4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var char = prompt("Enter a single character:").toLowerCase();

if (char.length === 1) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        alert(true);
    } else {
        alert(false);
    }
} else {
    alert("Please enter only one character.");
}

// Qno:5. Write a program that a. Store correct password in a JS variable.b. Asks user to enter his/her password.c. Validate the two passwords: i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.
var correctPassword = "abc123";

var userPassword = prompt("Enter your password:");

if (userPassword === "" || userPassword === null) {
    alert("Please enter your password");
} 
else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} 
else {
    alert("Incorrect password");
}

// Qno:6. This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) {greeting = "Good day"; else greeting = "Good evening";}
var greeting;
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

alert(greeting);

// Qno:7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
var time = +prompt("Enter time in 24-hour format (e.g. 1900 for 7 PM):");

if (time >= 0 && time < 1200) {
    alert("Good morning");
}
else if (time >= 1200 && time < 1700) {
    alert("Good afternoon");
}
else if (time >= 1700 && time < 2100) {
    alert("Good evening");
}
else if (time >= 2100 && time <= 2359) {
    alert("Good night");
}
else {
    alert("Invalid time format");
}

                  //  THE END

// Qno:1. Declare an empty array using JS literal notation to store student names in future.
var studentNames = [];
console.log(studentNames);

// Qno:2. Declare an empty array using JS object notation to store student names in future.
var studentNames = new Array();
console.log(studentNamesObj);

// Qno:3. Declare and initialize a strings array.
var fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(stringArray);

// Qno:4. Declare and initialize a numbers array.
var numbers = [10, 20, 30, 40, 50];
console.log(numberArray);

// Qno:5. Declare and initialize a boolean array.
var booleanArray = [true, false, true, false];
console.log(booleanArray);

// QnO:6. Declare and initialize a mixed array.
var mixedArray = ["Ali", 25, true, null, 45, "Sara"];
console.log(mixedArray);

// Qno:7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2>Qualifications in Pakistan:</h2>");
document.write("1) " + qualifications[0] + "<br>");
document.write("2) " + qualifications[1] + "<br>");
document.write("3) " + qualifications[2] + "<br>");
document.write("4) " + qualifications[3] + "<br>");
document.write("5) " + qualifications[4] + "<br>");
document.write("6) " + qualifications[5] + "<br>");
document.write("7) " + qualifications[6] + "<br>");
document.write("8) " + qualifications[7] + "<br>");

console.log(qualifications);

// Qno:8. Write a program to store 3 student names in an array.Take another array to store score of these three students.Assume that total marks are 500 for each student, display the scores & percentages of students like:
var studentNames = ["Ali", "Sara", "Ahmed"];

var scores = [420, 380, 450];

var totalMarks = 500;

document.write("Score of " + studentNames[0] + " is " + scores[0] + 
               ". Percentage: " + (scores[0] / totalMarks * 100) + "%<br>");

document.write("Score of " + studentNames[1] + " is " + scores[1] + 
               ". Percentage: " + (scores[1] / totalMarks * 100) + "%<br>");

document.write("Score of " + studentNames[2] + " is " + scores[2] + 
               ". Percentage: " + (scores[2] / totalMarks * 100) + "%<br>");

// Qno:9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updatedarray in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.
var colors = ["Red", "Green", "Blue"];
document.write("<b>Initial Array:</b> " + colors + "<br>");

var colorStart = prompt("Enter a color to add at the beginning:");
colors.unshift(colorStart);
document.write("<b>After adding to beginning:</b> " + colors + "<br>");

var colorEnd = prompt("Enter a color to add at the end:");
colors.push(colorEnd);
document.write("<b>After adding to end:</b> " + colors + "<br>");

colors.unshift("Purple", "Orange");
document.write("<b>After adding two colors to beginning:</b> " + colors + "<br>");

colors.shift();
document.write("<b>After deleting first color:</b> " + colors + "<br>");

colors.pop();
document.write("<b>After deleting last color:</b> " + colors + "<br>");

var indexAdd = +prompt("At which index do you want to add a color?");
var colorAtIndex = prompt("Enter the color name to add:");
colors.splice(indexAdd, 0, colorAtIndex);
document.write("<b>After adding color at index " + indexAdd + ":</b> " + colors + "<br>");

var indexDelete = +prompt("At which index do you want to delete color(s)?");
var deleteCount = +prompt("How many colors do you want to delete?");
colors.splice(indexDelete, deleteCount);
document.write("<b>After deleting " + deleteCount + " color(s) from index " + indexDelete + ":</b> " + colors + "<br>");

// Qno:10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
var studentScores = [320, 230, 480, 120];

document.write("<h3>Scores of Students: " + studentScores + "</h3>");

studentScores.sort(function(a, b) {
    return a - b; 
});

document.write("<h3>Ordered Scores of Students: " + studentScores + "</h3>")

// Qno:11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

document.write("<h3>Cities List: " + cities + "</h3>");

var selectedCities = cities.slice(1, 4); 

document.write("<h3>Selected Cities List: " + selectedCities + "</h3>");

// Qno:12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”];(Use array’s join method)
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" "); 
document.write(singleString);

// Qno:13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
var fifoArray = [];

fifoArray.push("First");
fifoArray.push("Second");
fifoArray.push("Third");

console.log("Original Array:", fifoArray);

console.log(fifoArray.shift()); 
console.log(fifoArray.shift()); 
console.log(fifoArray.shift()); 

// Qno:14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)
var lifoArray = [];

lifoArray.push("First");
lifoArray.push("Second");
lifoArray.push("Third");

console.log("Original Array:", lifoArray);

console.log(lifoArray.pop()); 
console.log(lifoArray.pop());
console.log(lifoArray.pop()); 

// Qno:15. Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array.Display the following dropdown/select menu in your browser using document.write() method:
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");

                  //  THE END