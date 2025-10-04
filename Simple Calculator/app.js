            //  SIMPLE CALCULATOR
            
function put(value) {
  var display = document.getElementById("display");
  display.value = display.value + value; 
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  var calculation = document.getElementById("display").value;
  
  if (calculation) {
    var result = eval(calculation);  
    document.getElementById("display").value = result;
  }
}