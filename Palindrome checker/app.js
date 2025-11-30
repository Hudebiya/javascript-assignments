                     // Palindrome Checker

function checkPalindrome() {

  var word = document.getElementById("word").value;
  var length = word.length;
  var letters = word.split("");  

  var reversed = "";
  for (var i = length - 1; i >= 0; i--) {
    reversed += letters[i];   
  }

  if (word === "") {
    Swal.fire({
      icon: "warning",
      title: "Empty!",
      text: "Please enter a word!"
    });
  }
  else if (word === reversed) {
    Swal.fire({
      icon: "success",
      title: "Palindrome!",
      text: `"${word}" is a palindrome`
    });
  } 
  else {
    Swal.fire({
      icon: "error",
      title: "Not a Palindrome!",
      text: `"${word}" is not a palindrome`
    });
  }
}
