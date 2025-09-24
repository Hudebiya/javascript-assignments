           //  CHAPTER  31 TO 34
           
// Qno:1. Write a program that displays current date and time in your browser.
var currentDate = new Date();

console.log("Current Date & Time: " + currentDate);

// Qno:2. Write a program that alerts the current month in words.For example December.
var months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];
var currentMonthIndex = new Date().getMonth();

var currentMonth = months[currentMonthIndex];

alert("Current Month: " + currentMonth);

console.log("Current Month: " + currentMonth);

// Qno:3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDayIndex = new Date().getDay();

var currentDay = days[currentDayIndex];

alert("Today is " + currentDay);

console.log("Today is " + currentDay);

// Qno:4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
var today = new Date().getDay();

if (today === 0 || today === 6) {
    alert("It's Fun day");
} else {
    alert("It's a working day");
}

console.log(today === 0 || today === 6 ? "It's Fun day" : "It's a working day");

// Qno:5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
var today = new Date();

var midMonth = new Date(today.getFullYear(), today.getMonth(), 16);

if (today < midMonth) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}

// Qno:6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
var timeInMinutes = new Date().getTime() / (1000 * 60);
console.log("Minutes since midnight, Jan 1, 1970: " + timeInMinutes);

// Qno:7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
var now = new Date();
var hour = now.getHours();

if (hour < 12) {
    console.log("It's AM");
} else {
    console.log("It's PM");
}

// Qno:8. Write a program that creates a Date object for the last dayof the last month of 2020 and assigns it to variable named laterDate.
var laterDate = new Date(2020, 11, 31); 
console.log(laterDate);

// Qno:9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015
var ramadanStart = new Date("June 18, 2015");
var today = new Date();
var diffMs = today - ramadanStart;

var daysPassed = Math.floor(diffMs / (1000 * 60 * 60 * 24));

console.log("Days passed since 1st Ramadan: " + daysPassed);

// Qno:10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
var beginning2015 = new Date("January 1, 2015");

var now = new Date();

var diffMs = now - beginning2015;

var diffSeconds = Math.floor(diffMs / 1000);

console.log("Seconds elapsed between beginning of 2015 and now: " + diffSeconds);

// Qno:11. Create a Date object for the current date and time.Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
var currentDate = new Date();

var currentHours = currentDate.getHours();
console.log("Current Hours: " + currentHours);

currentDate.setHours(currentHours + 1);

console.log("Date & Time (1 hour ahead): " + currentDate);

// Qno:12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
var currentDate = new Date();
console.log("Current Date: " + currentDate);

currentDate.setFullYear(currentDate.getFullYear() - 100);

console.log("Date 100 years back: " + currentDate);

// Qno:13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.
var age = +prompt("Enter your age:");
var currentYear = new Date().getFullYear();

var birthYear = currentYear - age;

console.log("Your age is: " + age);
console.log("Your birth year is: " + birthYear);

// Qno:14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date) Where,

var customerName = prompt("Enter Customer Name:");
var currentMonth = prompt("Enter Current Month:");
var numberOfUnits = +prompt("Enter Number of Units:");
var chargesPerUnit = +prompt("Enter Charges per Unit:");
var latePaymentSurcharge = +prompt("Enter Late Payment Surcharge:");

var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);


console.log("K-Electric Bill");
console.log("---------------------------");
console.log("Customer Name: " + customerName);
console.log("Month: " + currentMonth);
console.log("Number of Units: " + numberOfUnits.toFixed(2));
console.log("Charges per Unit: " + chargesPerUnit.toFixed(2));
console.log("Net Amount Payable (within Due Date): " + netAmountPayable);
console.log("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2));
console.log("Gross Amount Payable (after Due Date): " + grossAmountPayable);


                     //   THE END