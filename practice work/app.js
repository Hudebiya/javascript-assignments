//       PRACTICE WORK

// alert("Welcome to JavaScript Learning by Hudebiya!");          // alert

/* var userCity = "Karachi";
var userCountry = "Pakistan";
var fullLocation = "You live in Karachi, Pakistan.";

alert(userCity);
alert(userCountry);
alert(fullLocation);           //  Variables for Strings    */

/* var userGreeting = "Hello";
var userName = "Hudebiya";
var userMessage = userGreeting + ", " + userName + "! Welcome to JavaScript.";
alert(userMessage);

var sentenceStart = "My favorite movie is ";
var movieName = "Frozen";
var finalMessage = sentenceStart + movieName + ".";
alert(finalMessage);                    //  String Concatenation    */

/* var user1Pen = 25;
var user2Pen = 15;
var totalPrice = user1Pen + user2Pen;
var difference = user1Pen - user2Pen;
var multiplication = user1Pen * 2;
var quotient = user1Pen / 2;

alert("Total Price: " + totalPrice);
alert("Price Difference: " + difference);
alert("2 Pieces of user1Pen: " + multiplication);
alert("Half Price of user1Pen: " + quotient);      //  Variables for Numbers & Basic Math   */

/* var conePrice = 50;
var cupPrice = 70;
var toppingPrice = 30;

var totalCones = conePrice * 3;
var totalCups = cupPrice * 2;
var totalTopping = toppingPrice * 4;

var grandTotal = totalCones + totalCups + totalTopping;

alert("Total Cones Price: " + totalCones);
alert("Total Cups Price: " + totalCups);
alert("Total Toppings Price: " + totalTopping);
alert("Grand Total: " + grandTotal);           //  Math Expressions     */

/* var cookies = 10;

alert(++cookies);   // Pre-increment: 10 → 11, alert shows 11
alert(cookies++);   // Post-increment: alert shows 11, cookies becomes 12
alert(--cookies);   // Pre-decrement: 12 → 11, alert shows 11
alert(cookies--);   // Post-decrement: alert shows 11, cookies becomes 10
alert(cookies);     // Final cookies: 10            //  Unfamiliar Operators (++, --)     */

/* var userPrice = 80; // paisa aapke paas
var iceCreamPrice = 100; // ice cream ka price

if (userPrice >= iceCreamPrice) {
    alert("You can buy ice cream");
} else {
    alert("You cannot buy ice cream");
}                    //   If…Else Statements     */

/* var cone = 50;
var cup = 70;
var topping = 30;
var boughtCone = 2;
var boughtCup = 1;
var boughtTopping = 3;

// BODMAS calculation
var totalCost = (cone * boughtCone) + (cup * boughtCup) + (topping * boughtTopping);
// Concatenation for final message
var message = "You bought " + boughtCone + " cones, " + boughtCup + " cup and "
            + boughtTopping + " toppings. Your total bill is Rs " + totalCost + ".";

alert(message);                //  BODMAS  + Concatenation          */


/* var userName = prompt("Enter your Name:");
var userAge = prompt("Enter your Age:");
alert("My name is " + userName + " and I'm " + userAge + " years old.");    //  PROMPTS      */

/* var currentTemperature = prompt("What is the current temperature in your area?");
if (currentTemperature >= 40) {
    alert("It’s too hot outside.");
} else if (currentTemperature >= 30) {
    alert("The weather is normal.");
} else {
    alert("It’s cold outside.");
}           //     If ... else Statement                */
      
/* var userAge = prompt("Enter your Age: ");
if (userAge >= 18) {
    alert("You are adult");
} else {
    alert("You are minor");
}                //    Comparison Operators            */  

/* var userMarks = prompt("Enter your Marks:");
if (userMarks >= 90) {
    alert("A+ grade");
} else if (userMarks >= 75) {
    alert("B grade");
} else if (userMarks >= 50) {
    alert("C grade");
} else {
    alert("Fail");
}           //    if … else and else if Statements   */

/* var userAge = 18;
var userMembership = true;
if (userAge>=18 && userMembership === true){
    alert("You can join the club");
} else{
    alert("Access denied");
}                     //  Testing Sets of Conditions ( &&  , ||)       */

/* var hasMoney = prompt("Do you have money? (yes/no)");
if (hasMoney === "yes") {
    var flavour = prompt("Which flavour do you want? (chocolate/vanilla)");
    
    if (flavour === "chocolate") {
        alert("Here is your chocolate ice cream!");
    } else {
        alert("Here is your vanilla ice cream!");
    }
} else {
    alert("You need money to buy ice cream!");
}

var temp = Number(prompt("Enter current temperature:"));
if (temp > 30) {
    if (temp >= 40) {
        alert("It's very hot");
    } else {
        alert("It's warm");
    }
} else {
    alert("It's cold");
}                //  Nested IF                  */

/* var items = ["Bread", "Milk", "Eggs"];
alert(items.length);
items.push("Juice");
console.log(items);
items.unshift("Butter");
console.log(items);
items.pop();
console.log(items);
items.shift();
console.log(items);
items.splice(2,0,"Cheese");
console.log(items);             //   Array       */

/* for (var i = 1; i <= 10; i++){
    console.log(i);
}   */















