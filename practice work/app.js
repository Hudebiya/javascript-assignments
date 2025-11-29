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
}   

var names = ["Ali", "Sara", "John", "Aisha"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}    

var num = +prompt("Enter your number:");
for (var i =1; i<=10; i++ ){
    console.log(num + "x" + i + "=" + (num*i));
}       //    Loop         */

/* var items = ["Bread", "Milk", "Eggs", "Juice", "Butter"];
var userItem = prompt("Enter item name:");
var found = false;

for (var i = 0; i < items.length; i++) {
    if (items[i] === userItem) {
        found = true;
        break;
    }
}
if (found === true) {
    alert("Item is available!");
} else {
    alert("Item not found!");
}        //    Flag (Boolean)      */
        
/* for (var roomNum = 1; roomNum <=3; roomNum++){
    console.log("Room: " + roomNum);
    for (var chairNum =1; chairNum <=4; chairNum++){
        console.log("  Chair: " + chairNum);
    }  
}     // Nested Loop        */

/* var cityName = prompt("Enter your City name:");
alert(cityName.toLowerCase());  // lowercase
alert(cityName.toUpperCase());   // uppercase         */

/* var userWord = prompt("Enter your word:");
alert("Length: " + userWord.length);
alert("First Part (0 to 5): " + userWord.slice(0, 5));
alert("Second Part (5 to 10): " + userWord.slice(5, 10));   //  String Length & Extracting Parts  */

/* var userSen = prompt("Enter your Sentence:");
var userWord = prompt("Enter your Word:");
if (userSen.indexOf(userWord) !== -1) {
    alert("Letter found!");
} else {
    alert("Letter not found!");
}           //    IndexOf        */

/* var userWord = prompt("Enter your Word:");
var index = +prompt("Enter index of a word:")
alert(userWord.charAt(index));      //  CharAt       */

/* var sentence = prompt("Enter one line sentence:");
var userWord = prompt("Enter the word you want to replace:");
var wordRep = prompt("Enter the new word:");

var newText = sentence.replace(userWord, wordRep);
alert(newText);    // Replace Method     */

/* var num = +prompt("Enter your decimal number:");
alert("Math.round = " + Math.round(num));
alert("Math.floor = " + Math.floor(num));
alert("Math.ceil = " + Math.ceil(num));        //   Round, Floor, Ceil  Number         */

/* var num = +prompt("Enter your number 1 to 100:");
var randomNum = Math.floor(Math.random() * 100) + 1;
alert("Random number is: " + randomNum);       //   Random Number    */

/* var firstNum = parseInt(prompt("Enter your Number:"));
var secondNum = parseInt(prompt("Enter your Number:"));
alert(firstNum + secondNum);
alert(firstNum - secondNum);
alert(firstNum * secondNum);
alert(firstNum / secondNum);      //   Convert String → Number        */

/* var userAge = Number(prompt("Enter your Age:"));
var message = "you Age is: " + userAge.toString();
alert(message);      // Converting Strings to Numbers, & Numbers to Strings              */

/* var userNum = parseFloat(prompt("Enter your number"));
alert("Your number of Two decimal is "+ userNum.toFixed(2));
alert("Your number of four decimal is "+ userNum.toFixed(4));     // to Fixed            */

/* var now = new Date();
alert("Hello Hu it's a new Time  " + now);     // New Date and Time                   */

/* var birthday = prompt("Enter your birthday (like: June 25, 2005)");
var birthDate = new Date(birthday);
var examYear = +prompt("Enter exam year:");
var examMonth = +prompt("Enter exam month (1-12):") - 1; 
var examDay = +prompt("Enter exam day:");
var examDate = new Date(examYear, examMonth, examDay);
var meeting = prompt("Enter meeting date & time (like 2025-11-19 14:30:00)");
var meetingDate = new Date(meeting);
alert("Birthday: " + birthDate);
alert("Exam Date: " + examDate);
alert("Meeting Date: " + meetingDate);                            */

/* var userDate = new Date();
userDate.setFullYear(2030);
userDate.setMonth(11);
userDate.setDate(25);
alert("Updated Full Year:\n" + userDate);    //  Set Time And Date             */

/* function showMessage(){
   alert("Welcome to my website!");
}
showMessage();                 // Function                    */

/* function subtract(a,b) {
    return a-b;
}
var result = subtract(16,4);
alert(result);              //    return in function              */

/* var country = "Pakistan";
function showInfo(){
    var city = "Karachi";
    alert("I live in "+ city + "," + country);
}
 showInfo();          //  Global ab=nd Local variables             */

/* var userChoice = prompt("Enter your favourite Fruit Name").toLowerCase();
switch(userChoice){
    case "apple":
        alert("Red fruit");
        break;

    case "banana":
        alert("Yellow fruit");
        break;

    case "grapes":
        alert("Green fruit");
        break;

    default:
        alert("Fruit not available");
}                                 //     Switch Case               */

/* var userPet = prompt("Enter your favourite animal or pet:").toLowerCase();
switch(userPet){
    case "cat":
        alert("It is a pet animal");
        break;

    case "lion":
        alert("It is a wild animal");
        break;

    case "cow":
        alert("It gives milk");
        break;

    default:
        alert("Animal not found");
}                    //   Switch statements                    */














