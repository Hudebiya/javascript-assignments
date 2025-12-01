                   //  JavaScript  Object
                   
/* Qno: 1. Suppose You have an array of object var itemsArray = [ {name:”juice”,price:”50”, quantity:”3”}, {name:”cookie”,price:”30”, quantity:”9”}, {name:”shirt”,price:”880”, quantity:”1”}, {name:”pen”,price:”100”, quantity:”2”}];
Calculate total price of each item and all items               
var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
];
var totalAllItems = 0;

for (var i = 0; i < itemsArray.length; i++) {

    var itemPrice = Number(itemsArray[i].price);
    var itemQty = Number(itemsArray[i].quantity);

    var totalPrice = itemPrice * itemQty;

    console.log(
        itemsArray[i].name + " ka total price: " + totalPrice
    );

    totalAllItems += totalPrice;
}
console.log("Total of all items: " + totalAllItems);           */

/* Qno: 2. Create an object with properties name, email, password, age, gender, city, country. Check if age and country properties exist in object or not. Also check firstName and lastName properties in object.
var user = {
    name: "Ayesha",
    email: "ayesha@gmail.com",
    password: "12345",
    age: 21,
    gender: "female",
    city: "Karachi",
    country: "Pakistan"
};

console.log("age exists? ", "age" in user);
console.log("country exists? ", "country" in user);
console.log("firstName exists? ", "firstName" in user);
console.log("lastName exists? ", "lastName" in user);              */

/* Qno: 3. Create a constructor function with some properties. Now create multiple records using the constructor.
function Student(name, age, city, email) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.email = email;
}

var student1 = new Student("Ayesha", 20, "Karachi", "ayesha@gmail.com");
var student2 = new Student("Hina", 22, "Lahore", "hina@gmail.com");
var student3 = new Student("Ahmed", 19, "Islamabad", "ahmed@gmail.com");

console.log(student1);
console.log(student2);
console.log(student3);                      */

/* Qno: 4. Suppose you want to check population of your area, their educations and professions. Create a constructor function which holds following properties: Name, gender, address, education, profession, Enter all records one by one. 
function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

var person1 = new Person("Ayesha", "Female", "Karachi", "Graduate", "Teacher");
var person2 = new Person("Hammad", "Male", "Lahore", "Intermediate", "Developer");
var person3 = new Person("Sana", "Female", "Islamabad", "Masters", "Doctor");

var population = [person1, person2, person3];

console.log(population);

localStorage.setItem("populationRecords", JSON.stringify(population));

var getData = localStorage.getItem("populationRecords");
var parsedData = JSON.parse(getData);

console.log(parsedData);                         

                                 THE END                       */
