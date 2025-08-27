               //  Chapter 17 to 20

// Qno:1. Declare and initialize an empty multidimensional array. (Array of arrays)
var multiArray = [[], [], []];

console.log(multiArray);

// Qno:2. Declare and initialize a multidimensional array representing the following matrix:
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

// Qno:3. Write a program to print numeric counting from 1 to 10.
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// Qno:4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
var tableNumber = +prompt("Enter a number to show its multiplication table:");
var tableLength = +prompt("Enter length of multiplication table:");

console.log("<h3>Multiplication Table of " + tableNumber + "</h3>");
for (var i = 1; i <= tableLength; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}

// Qno:5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Qno:6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
console.log("Counting:");
for (var i = 1; i <= 15; i++) {
    console.log(i);
}

console.log("Reverse Counting:");
for (var i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Even:");
for (var i = 0; i <= 20; i += 2) {
    console.log(i);
}

console.log("Odd:");
for (var i = 1; i < 20; i += 2) {
    console.log(i);
}

console.log("Series:");
for (var i = 2; i <= 20; i += 2) {
    console.log(i + "k");
}

// Qno:7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”].Write a program to enable “search by user input” in an array.After searching, prompt the user whether the given item is found in the list or not. 
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter item to search:");

var index = A.indexOf(userInput);

if (index !== -1) {
    console.log(userInput + " is available at index " + index + " in our bakery.");
} else {
    console.log("We are sorry. " + userInput + " is not available in our bakery.");
}

// Qno:8. Write a program to identify the largest number in the given array.A = [24, 53, 78, 91, 12].
var A = [24, 53, 78, 91, 12];
var largest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}
console.log("The largest number is " + largest);
    
// Qno:9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]
var A = [24, 53, 78, 91, 12];
var smallest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}
console.log("The smallest number is " + smallest);

// Qno:10. Write a program to print multiples of 5 ranging 1 to 100.
for (var i = 5; i <= 100; i += 5) {
    console.log(i);
}

                 // THE END
