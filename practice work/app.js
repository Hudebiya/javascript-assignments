//       PRACTICE WORK

var today=new Date(); 
var targetDate=new Date("2/18/2026");
var diff = targetDate - today;
var oneDay = 1000 * 60 * 60 * 24
var daysLeft=Math.ceil(diff/ oneDay);

console.log("Ramadan is coming with in" + (daysLeft) + "days");

