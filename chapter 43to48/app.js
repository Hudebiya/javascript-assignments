            //   CHAPTER 43 TO 48

// Qno:1. Show an alert box on click on a link.
// var link = document.getElementById("alertLink");

// link.addEventListener("click", function() {
//   Swal.fire({
//     title: "Hello!",
//     text: "You clicked on the link!",
//     icon: "info",
//     confirmButtonText: "OK"
//   });
// });

// Qno:2. Display some Mobile images in browser. On click on an image Show the message in alert to user.
// var img1 = document.getElementById("mobile1");
// var img2 = document.getElementById("mobile2");
// var img3 = document.getElementById("mobile3");

// img1.addEventListener("click", function() {
//   Swal.fire({
//     title: "iPhone",
//     text: "You clicked on the iPhone image!",
//     icon: "info",
//     confirmButtonText: "OK"
//   });
// });

// img2.addEventListener("click", function() {
//   Swal.fire({
//     title: "Samsung",
//     text: "You clicked on the Samsung image!",
//     icon: "success",
//     confirmButtonText: "Cool!"
//   });
// });

// img3.addEventListener("click", function() {
//   Swal.fire({
//     title: "Oppo",
//     text: "You clicked on the Oppo image!",
//     icon: "warning",
//     confirmButtonText: "Got it!"
//   });
// });

// Qno:3. Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.After click on delete button on “Mark ” row
// var deleteButtons = document.querySelectorAll(".deleteBtn");

// deleteButtons.forEach(function(button) {
//   button.addEventListener("click", function() {

//     var row = this.closest("tr");

//     Swal.fire({
//       title: "Are you sure?",
//       text: "You want to delete this record?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//       if (result.isConfirmed) {
//         row.remove();

    
//         Swal.fire({
//           title: "Deleted!",
//           text: "The record has been deleted.",
//           icon: "success",
//           confirmButtonText: "OK"
//         });
//       }
//     });
//   });
// });

// Qno:4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.
// var image = document.getElementById("myImage");

// image.addEventListener("mouseover", function() {
//   image.src = "https://i.pinimg.com/originals/72/6b/41/726b41b1662276bf50285cff47018b1c.gif";
// });

// image.addEventListener("mouseout", function() {
//   image.src = "https://pngimg.com/d/lamborghini_PNG102907.png";
// });

// Qno:5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.
// var count = 0;

// var countDisplay = document.getElementById("count");
// var increaseBtn = document.getElementById("increase");
// var decreaseBtn = document.getElementById("decrease");

// increaseBtn.addEventListener("click", function() {
//   count = count + 1;
//   countDisplay.textContent = count;
// });

// decreaseBtn.addEventListener("click", function() {
//   count = count - 1;
//   countDisplay.textContent = count;
// });