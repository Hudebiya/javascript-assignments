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

