            //  SIMPLE CALCULATOR
            
function put(value) {
  var display = document.getElementById("display");
  display.value = display.value + value; 
}

// Display clear karna
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Calculation karna
function calculate() {
  var calculation = document.getElementById("display").value;
  
  if (calculation) {
    var result = eval(calculation);  // math expression solve
    document.getElementById("display").value = result;
  }
}