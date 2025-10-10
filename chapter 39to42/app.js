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

  