function press(value) {
  var display = document.getElementById("display");
  display.value = display.value + value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  var expression = document.getElementById("display").value;
  var result = 0;

  if (expression.indexOf("+") !== -1) {
    var parts = expression.split("+");
    result = Number(parts[0]) + Number(parts[1]);
  }
  else if (expression.indexOf("-") !== -1) {
    var parts = expression.split("-");
    result = Number(parts[0]) - Number(parts[1]);
  }
  else if (expression.indexOf("*") !== -1) {
    var parts = expression.split("*");
    result = Number(parts[0]) * Number(parts[1]);
  }
  else if (expression.indexOf("/") !== -1) {
    var parts = expression.split("/");
    result = Number(parts[0]) / Number(parts[1]);
  }
  else {
    document.getElementById("display").value = "Error!";
    return;
  }

  document.getElementById("display").value = result;
}
