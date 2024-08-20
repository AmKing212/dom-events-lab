const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".operator.C");

const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");

/*-------------------------------- Variables --------------------------------*/

let previousInput = "";
let currentInput = "";
let operator = "";
let result = null;

/*----------------------------- Event Listeners -----------------------------*/

// Event listener for number buttons
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    currentInput += event.target.innerText;
    display.innerText = currentInput;
  });
});

// Event listener for operator buttons
operators.forEach((op) => {
  op.addEventListener("click", (event) => {
    if (event.target.innerText === "C") {
      clearAll();
    } else if (currentInput !== "") {
      if (previousInput && operator) {
        calculate();
      }
      operator = event.target.innerText;
      previousInput = currentInput;
      currentInput = "";
    }
  });
});

// Event listener for the equals button
equals.addEventListener("click", () => {
  if (currentInput && previousInput && operator) {
    calculate();
    display.innerText = result;
    currentInput = result;
    previousInput = "";
    operator = "";
  }
});

// Clear the calculator
clear.addEventListener("click", () => {
  clearAll();
});

/*-------------------------------- Functions --------------------------------*/

// Clear all inputs and reset the calculator
function clearAll() {
  currentInput = "";
  previousInput = "";
  operator = "";
  result = null;
  display.innerText = "0";
}

// Perform the calculation based on the operator
function calculate() {
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }
}
