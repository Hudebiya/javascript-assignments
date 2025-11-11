                //  Cisco Practice Work
            
//   1.  ARRAY

// var names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
// console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
// console.log(names[0][1]); // -> Emma
// console.log(names[1][1]); // -> James
// var femaleNames = names[0];
// console.log(femaleNames[0]); // -> Olivia
// console.log(femaleNames[2]); // -> Mia

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var day = "Sunday";
// console.log(typeof days); // -> object
// console.log(typeof day); // -> string
// console.log(days instanceof Array); // -> true
// console.log(day instanceof Array); // -> false

//   2. PUSH

// var names = ["Olivia", "Emma", "Mateo", "Samuel"];
// console.log(names.length); // -> 4
// names.push("Amelia");
// console.log(names.length); // -> 5
// console.log(names); // - > ["Olivia", "Emma", "Mateo","Samuel", "Amelia"]

//   3. POP

// var names= ["Olivia", "Emma", "Mateo", "Samuel"];
// console.log(names.length); // -> 4
// var name = names.pop();
// console.log(names.length); // -> 3
// console.log(name); // -> Samuel
// console.log(names); // -> ["Olivia", "Emma", "Mateo"]

//   4. SHIFT

// var names = ["Olivia", "Emma", "Mateo", "Samuel"];
// console.log(names.length); // -> 4
// var name = names.shift();
// console.log(names.length); // -> 3
// console.log(name); // -> Olivia
// console.log(names); // -> ["Emma", "Mateo", "Samuel"]

//   5. UNSHIFT

// var names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
// console.log(names.indexOf("Mateo"));  //  ->  2
// console.log(names.indexOf("Victor"));  //  ->  -1
// var names = names.unshift();
// console.log(names.length);  //  ->  4
// console.log(name);  // ->  Amelia
// console.log(names);  // ->  ["Amelia",  "Olivia",  "Emma",  "Mateo",  "Samuel"]

//   REVERSE

// var names = ["Olivia", "Emma", "Mateo", "Samuel"];
// names.reverse();
// console.log(names); // -> ["Samuel", "Mateo", "Emma", "Olivia"]

//   SLICE

// var names = ["Olivia", "Emma", "Mateo", "Samuel"];
// var n1 = names.slice(2);
// console.log(n1); // -> ["Mateo", "Samuel"]
// var n2 = names.slice(1,3);
// console.log(n2); // -> ["Emma", "Mateo"]
// var n3 = names.slice(0, -1);
// console.log(n3); // -> ["Olivia", "Emma", "Mateo"]
// var n4 = names.slice(-1);
// console.log(n4); // -> ["Samuel"]
// console.log(names); // -> ["Olivia", "Emma", "Mateo", "Samuel"]

//   ARITHMETIC  MEAN

/* var x = 5;
var y = 2;
console.log("addition: ", x + y); // -> 7
console.log("subtraction: ", x - y); // -> 3
console.log("multiplication: ", x * y); // -> 10
console.log("division: ", x / y); // -> 2.5
console.log("division remainder :", x % y); // -> 1
console.log("exponent: ", x ** y); // -> 25 */

/*    ALERT

alert("Hello, World!")
window.alert("Hello, World! for the second time");
alert(4 * 7);
alert(true);
alert("text 1", "text 2"); // only "text 1" will be displayed  */

/*    IF / ELSE Statement

var isUserReady = confirm("Are you ready?");
if (isUserReady) {
    console.log("User ready!");
} else {
    console.log("User not ready!");
}  */

/*   ELSE IF STATEMENT

var number = prompt("Enter a number", 0);
if (number < 10) {
    alert("<10");
} else if (number < 30) {
    alert("<30");
} else if (number < 60) {
    alert("<60");
} else if (number < 90) {
    alert("<90");
} else if (number < 100) {
    alert("<100");
} else if (number == 100) {
    alert("100")
} else {
    alert(">100")
}  */

/*  SWITCH  STATEMENT

var gate = prompt("Choose gate: a, b, or c");
var win = false;
switch (gate) {
    case "a":
        alert("Gate A: empty");
        break;
    case "b":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}
if (win) {
    alert("Winner!");
}   */

/*  WHILE  LOOP

var isOver = false;
var counter = 1;
while (!isOver) {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
}  */

/*   DO  WHILE  LOOP

var condition = false;
while (condition) {
    console.log("A while loop iteration."); // never executed
}
do {
    console.log("A do ... while loop iteration."); // executed once
} while (condition);  */

/*    LOOP

var values = [10, 30, 50, 100];
var sum = 0;
for (let i = 0; i < 4; i++) {
    sum += values[i];
}
console.log(sum); // -> 190  */

/*  2nd  EXAMPLE
var values = [10, 30, 50, 100];
for (let i = 0; i < values.length; i++) {
    console.log(values[i]); // -> 10, 30, 50, 100
}
for (let i = values.length - 1; i > 0; i--) {
    console.log(values[i]); // -> 100, 50, 30, 10
}
for (let i = 0; i < values.length; i += 2) {
    console.log(values[i]); // -> 10, 50
}  */

/*  SWITCH  STATEMENT

var gate = prompt("Choose gate: a, b, or c");
var win = false;
switch (gate) {
    case "a": {
        let message = "Gate A";
        console.log(message);
        break;
    }
    case "b": {
        let message = "Gate B";
        console.log(message);
        break;
    }
    case "c": {
        let message = "Gate C";
        console.log(message);
        break;
    }
    default:
        alert("No gate " + String(gate));
}
if (win) {
    alert("Winner!");
}   */

/*    FUNCTIONS

function getMeanTemp(temperatures) {
     let sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
      sum += temperatures[i];
     }
     return sum / temperatures.length;
}
let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`mean: ${getMeanTemp(day1)}`); // -> mean:
16.666666666666668
let day2 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log(`mean: ${getMeanTemp(day2)}`); // -> mean:
18.083333333333332

function add(first, second) {
return first + second;
}
let first = 10, second = 20, third = 40, fourth = 80;
console.log(add(first, second)); // -> 30
console.log(add(second, third)); // -> 60
console.log(add(third, fourth)); // -> 120    

function getMeanTemp(temperatures) {
     if (!(temperatures instanceof Array)) {
         return NaN;
     }
     let sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
         sum += temperatures[i];
     }
     return sum / temperatures.length;
}
console.log(getMeanTemp(10));       // -> NaN
console.log(getMeanTemp([10, 30])); // -> 20   */











