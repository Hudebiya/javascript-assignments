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
    alert("⚠️ Please enter a word!");
  }
  else if (word === reversed) {
    alert("✅ Palindrome!");
  } else {
    alert("❌ Not a palindrome.");
  }
}