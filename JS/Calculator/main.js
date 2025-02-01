const input = document.querySelector(".output");

function resetDisplay() {
  input.innerHTML = "";
}

function appendToDisplay(value) {
  input.innerHTML += value;
}

function evaluateExpression() {
  try {
    input.innerHTML = eval(input.innerHTML);
  } catch (error) {
    input.innerHTML = "ERRORO";
  }
}
