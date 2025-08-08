// Chapter no:1 ALERT

// Qno:1. Write a script to greet your website visitor using JS alert box.
alert("Welcome")


// Qno:2. Write a script to display following message on your webpage:
alert("Error! Please enter a valid Password.")


// Qno:3.Write a script to display following message on your webpage: (Hint : Use line break)
alert("Welcome to JS Land...\n Happy Coding!")


// Qno:4. Write a script to display following messages in sequence:
alert("Welcome to JS Land")
alert("Prevent this page from creating additional dialogs.")


// Qno:5. Generate the following message through browser’s developer console:
alert("Hello... I can run JS through my web browser's console")


// Qno:6.Make use of alerts in your new/existing HTML & CSS project. 


// Qno:7.Practice placement of <script></script> element in following sections of your project in exercise 6:a. Head b. Body (before your page’s HTML) c. Body (inside your page’s HTML) d. Body (after your page’s HTML)

// THE  END

// Chapter no:2  VARIABLES AND STRING

// Qno:1. Declare a variable called username.
var username;

// Qno:2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Hudebiya Bano";
alert(myName)

// Qno:3. Write script to. a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message. c) Display the message in alert box.
var message;
message = "Hello World";
alert(message);

// Qno:4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var studentName = "Hudebiya Bano";
var studentAge = "20 years old";
var studentCourse = "Certified Web & App Development";

alert(studentName);
alert(studentAge);
alert(studentCourse);

// Qno:5. Write a script to display the following alert using one JS variable:
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);

// Qno:6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatnation)
var email = "example@example.com";
alert("My email address is " + email);

// Qno:7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);

// Qno:8. Write a script to display this in browser through JS
document.write("Yah! I can write HTML content through JavaScript");

// Q no:9. Store following string in a variable and show in alert and browser through JS
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);
document.write(design);

                   // THE END

//  Chapter no: 3  VARIABLES FOR NUMBERS

// Qno:1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 20;
alert("I am" + age + "years old");

// Qno:2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have lisited this site N times”. 
var visitCount = 5; 
alert("You have visited this site" + visitCount + "times");

// Qno:3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = 2004;
document.write("My birth year is" + birthYear + "<br>");

// Qno:4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var visitorName = "John Doe";
var productTitle = "T-shirt(s)";
var quantity = 5;

document.write(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store.");

                   //  THE END
            
//   Chapter no: 4 VARIABLES NAMES: LEGAL AND ILLEGAL

// Qno:1. Declare 3 variables in one statement.
var firstName, lastName, age;

// Qno:2. Declare 5 legal & 5 illegal variable names.
var userName;
var $user;
var _user123;
var user1;
var camelCase;

// var 1user;         // Cannot start with number
// var user-name;     // Hyphen not allowed
// var var;           // Reserved keyword
// var alert;         // Reserved function name
// var user name;     // Spaces not allowed

// Qno:3. Display this in your browser a) A heading stating “Rules for naming JS variables” b) Variable names can only contain ______, ______,______ and ______. For example $my_1stVariable c) Variables must begin with a ______, ______ or_____. For example $name, _name or name
// d) Variable names are case _________ // e) Variable names should not be JS _________
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain letters, numbers, $, and _. <br>");
document.write("For example: $my_1stVariable<br><br>");

document.write("Variable names must begin with a letter, $ or _. <br>");
document.write("For example: $name, _name or name<br><br>");

document.write("Variable names are case sensitive.<br><br>");
document.write("Variable names should not be JS keywords.<br>");

                    //  THE END

// Chapter no:  MATHS EXPRESSIONS

// Qno:1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var num1 = 5;
var num2 = 3;
var sum = num1 + num2;

document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

// Qno:2. Repeat task1 for subtraction, multiplication, division & modulus.
var num1 = 5;
var num2 = 3;

var subtract = num1 - num2;
var multiply = num1 * num2;
var divide = num1 / num2;
var modulus = num1 % num2;

document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtract + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiply + "<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + divide + "<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus + "<br><br>");

// Qno:3. Do the following using JS Mathematic Expressions a. Declare a variable. b. Show the value of variable in your browser like “Value after variable declaration is: ??”.c. Initialize the variable with some number.d. Show the value of variable in your browser like “Initial value: 5”.e. Increment the variable.f. Show the value of variable in your browser like “Value after increment is: 6”.g. Add 7 to the variable.h. Show the value of variable in your browser like “Valueafter addition is: 13”.i. Decrement the variable.j. Show the value of variable in your browser like “Value
// after decrement is: 12”.k. Show the remainder after dividing the variable’s value by 3.l. Output : “The remainder is : 0”. 
var value;  // a) Declare a variable

document.write("Value after variable declaration is: " + value + "<br>");  // b)

value = 5;  // c) Initialize
document.write("Initial value: " + value + "<br>");  // d)

value++;  // e) Increment
document.write("Value after increment is: " + value + "<br>");  // f)

value = value + 7;  // g) Add 7
document.write("Value after addition is: " + value + "<br>");  // h

value--;  // i) Decrement
document.write("Value after decrement is: " + value + "<br>");

var remainder = value % 3;  // j) Modulus
document.write("The remainder is: " + remainder + "<br>");

// Qno:4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;

document.write("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR");

// Qno:5. Write a script to display multiplication table of any number in your browser. 
document.writeln("<h2>Tableof4</h2>")
var num=4;
document.write(num+"x1="+num*1+"<br>")
document.write(num+"x2="+num*2+"<br>")
document.write(num+"x3="+num*3+"<br>")
document.write(num+"x4="+num*4+"<br>")
document.write(num+"x5="+num*5+"<br>")
document.write(num+"x6="+num*6+"<br>")
document.write(num+"x7="+num*7+"<br>")
document.write(num+"x8="+num*8+"<br>")
document.write(num+"x9="+num*9+"<br>")
document.write(num+"x10="+num*10+"<br>")

// Qno:6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. a. Store a Celsius temperature into a variable.b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”.
var calciustemp = 25;
var fartemp = 70;
var formulatocal = (fartemp - 32) * 5 / 9;
var formulatofar = (calciustemp * 9 / 5) + 32;
document.write(calciustemp + "<sup>o</sup>C is " + formulatofar + "<sup>o</sup>F<br>");
document.write(fartemp + "<sup>o</sup>F is " + formulatocal + "<sup>o</sup>C");

              //  THE END