         // CHAPTER   39  to 42

// Qno:1. Write a custom function power ( a, b ), to calculate the value of a raised to b.
// function power(a,b){
//     return a ** b;
// }
// console.log(power(2 , 3));

// Qno:2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.Leap years ..., 2012, 2016, 2020, ...
// function isLeapyear(year){
//     if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
//         console.log(year + " is a Leap Year");
//     }else{
//         console.log(year + " is a Leap Year"); 
//     }
// }
// isLeapyear(2024);

// Qno:3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2.Calculate area of triangle using 2 functions
// function areaofTriangle(a , b , c){
//     var S=(a + b + c )/2;
//     var area = Math.sqrt(S * (S-a)*(S-b)*(S-c)); 
//     return area; 
// } 
//     var a= +prompt("Enter sides a:");
//     var b= +prompt("Enter sides b:");
//     var c= +prompt("Enter sides c:");
// console.log("Area of Triangle = " + areaofTriangle(a , b , c));

// function areaofTriangle()

//   2nd way of this question
// function calculateS(a, b, c) {
//   return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
//   let S = calculateS(a, b, c);
//   let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//   return area;
// }

// let a = 5;
// let b = 6;
// let c = 7;

// let areaOfTriangle = calculateArea(a, b, c);
// console.log("The area of the triangle is:", areaOfTriangle);

// Qno:4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.
// function average(m1, m2, m3){
//     return (m1 + m2 + m3) /3;
// }
// function percentage(m1, m2, m3){
//     return ((m1 + m2 + m3)/300) * 100;
// }
// function mainFunction(){
//     var m1=70;
//     var m2=80;
//     var m3=90;   

//   console.log("Average: " + average(m1, m2, m3));
//   console.log("Percentage: " + percentage(m1, m2, m3) + "%");
// }
//   mainFunction();
  
// Qno:5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.
// function customIndexOf(str, char) {
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       return i; 
//     }
//   }
//   return -1; 
// }

// var text = "javascript";
// var searchChar = "s";
// var result = customIndexOf(text, searchChar);

// console.log("Index of '" + searchChar + "' is: " + result);

// Qno:6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.
// function deleteVowels(sentence) {
//   var vowels = "aeiouAEIOU";
//   var result = "";

//   for (var i = 0; i < sentence.length; i++) {
//     if (vowels.indexOf(sentence[i]) === -1) {
//       result += sentence[i]; 
//     }
//   }
//   return result;
// }

// var mySentence = "I love JavaScript";
// var withoutVowels = deleteVowels(mySentence);

// console.log("Original Sentence: " + mySentence);
// console.log("After removing vowels: " + withoutVowels);

// Qno:7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text.For example, in the sentence “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui.
// function countSuccessiveVowels(line) {
//   var count = 0;
//   var vowels = "aeiouAEIOU";

//   for (var i = 0; i < line.length - 1; i++) {
//     var char1 = line[i];
//     var char2 = line[i + 1];

//     switch (char1) {
//       case 'a': case 'e': case 'i': case 'o': case 'u':
//       case 'A': case 'E': case 'I': case 'O': case 'U':
//         if (vowels.indexOf(char2) !== -1) {
//           count++;
//         }
//         break;
//       default:
//         break;
//     }
//   }
//   return count;
// }

// var sentence = "Pleases read this application and give me gratuity";
// var result = countSuccessiveVowels(sentence);

// console.log("Sentence: " + sentence);
// console.log("Number of successive vowel pairs: " + result);

// Qno:8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.
// function toMeters(km) {
//   var meters = km * 1000;
//   return meters;
// }

// function toFeet(km) {
//   var feet = km * 3280.84;
//   return feet;
// }

// function toInches(km) {
//   var inches = km * 39370.1;
//   return inches;
// }

// function toCentimeters(km) {
//   var cm = km * 100000;
//   return cm;
// }

// var distanceKm = 5; 
// console.log("Distance between two cities: " + distanceKm + " km");
// console.log("In Meters: " + toMeters(distanceKm));
// console.log("In Feet: " + toFeet(distanceKm));
// console.log("In Inches: " + toInches(distanceKm));
// console.log("In Centimeters: " + toCentimeters(distanceKm));

// Qno:9. Write a program to calculate overtime pay of employees.Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.
// function calculateOvertime(hoursWorked) {
//   var overtimePay = 0;
//   var overtimeRate = 12;

//   if (hoursWorked > 40) {
//     var overtimeHours = hoursWorked - 40;
//     overtimePay = overtimeHours * overtimeRate;
//   }

//   return overtimePay;
// }

// var numberOfEmployees = 3;  
// var count = 1;

// while (count <= numberOfEmployees) {
//   var hoursWorked = parseInt(prompt("Enter hours worked by employee " + count + ":"));
//   var pay = calculateOvertime(hoursWorked);

//   console.log("Employee " + count + ": Hours Worked = " + hoursWorked + ", Overtime Pay = Rs. " + pay);
//   count++;
// }

// Qno:10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the withdrawer.
// function calculateNotes(amount) {
//   var note100 = 0;
//   var note50 = 0;
//   var note10 = 0;

//   switch (true) {
//     case (amount >= 100):
//       note100 = Math.floor(amount / 100);
//       amount = amount % 100;

//     case (amount >= 50):
//       note50 = Math.floor(amount / 50);
//       amount = amount % 50;
    
//     case (amount >= 10):
//       note10 = Math.floor(amount / 10);
//       amount = amount % 10;
//       break;
//     default:
//       console.log("Amount is less than 10, no notes available.");
//   }

//   console.log("100 rupee notes: " + note100);
//   console.log("50 rupee notes: " + note50);
//   console.log("10 rupee notes: " + note10);
// }

// var withdrawAmount = parseInt(prompt("Enter amount to withdraw:"));
// console.log("Amount entered: " + withdrawAmount);
// calculateNotes(withdrawAmount);

              // THE END