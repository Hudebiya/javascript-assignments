// Chapter 6 to 9

// Qno:1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var a = 10;
document.write("Result:<br><br>");
document.write("The value of a is: " + a + "<br><br>");

// Pre-increment
document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-increment
document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Pre-decrement
document.write("The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-decrement
document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br>");

// Qno:2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: --a;--a - --b; --a - --b + ++b; --a - --b + ++b + b--; 
var a = 2, b = 1;

document.write("Initial value of a: " + a + "<br>");
document.write("Initial value of b: " + b + "<br><br>");

var step1 = --a;
document.write("Step 1 (--a): " + step1 + "<br>");

var step2 = step1 - --b;
document.write("Step 2 (--a - --b): " + step2 + "<br>"); 

var step3 = step2 + ++b;
document.write("Step 3 (--a - --b + ++b): " + step3 + "<br>"); 

var result = step3 + b--;
document.write("Step 4 (--a - --b + ++b + b--): " + result + "<br>"); 

document.write("<br>Final value of a: " + a + "<br>");
document.write("Final value of b: " + b + "<br>");
document.write("Final result: " + result + "<br>");

// Qno:3. Write a program that takes input a name from user & greet the user.
var userName =prompt("Hudebiya");
document.write("<h2>Hello,"+ userName +"!</h2>");
document.write("<p>Welcome to our website.</p>");

// Qno:4.


// Qno:5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
var num= +prompt("Enter a number for multiplication", "5")

document.write(num + " x 1 =" + (num*1) + "<br>");
document.write(num +" x 2 = " + (num*2) + "<br>");
document.write(num +" x 3 = " + (num*3) + "<br>");
document.write(num +" x 4 = " + (num*4) + "<br>");
document.write(num +" x 5 = " + (num*5) + "<br>");
document.write(num +" x 6 = " + (num*6) + "<br>");
document.write(num +" x 7 = " + (num*7) + "<br>");
document.write(num +" x 8 = " + (num*8) + "<br>");
document.write(num +" x 9 = " + (num*9) + "<br>");
document.write(num +" x 10 = " + (num*10) + "<br>");

// Qno:6. Take a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
var sub1 = prompt("Enter first subject name");
var sub2 = prompt("Enter second subject name");
var sub3 = prompt("Enter third subject name");

var totalMarks = 100;

var obt1 = +prompt("Enter obtained marks for " + sub1);
var obt2 = +prompt("Enter obtained marks for " + sub2);
var obt3 = +prompt("Enter obtained marks for " + sub3);

var totalObtained = obt1 + obt2 + obt3;
var totalAll = 300;
var percentage = (totalObtained / totalAll) * 100;

document.write("<table border='1' cellpadding='10'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

document.write("<tr><td>" + sub1 + "</td><td>" + totalMarks + "</td><td>" + obt1 + "</td><td>" + ((obt1/totalMarks)*100).toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + totalMarks + "</td><td>" + obt2 + "</td><td>" + ((obt2/totalMarks)*100).toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + totalMarks + "</td><td>" + obt3 + "</td><td>" + ((obt3/totalMarks)*100).toFixed(2) + "%</td></tr>");

document.write("<tr><th colspan='2'>Total</th><th>" + totalObtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");

document.write("</table>");

