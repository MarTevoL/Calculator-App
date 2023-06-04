const displayValue = document.querySelector(".display-value");
const numberButtons = document.querySelectorAll(".num-button");
const operatorButtons = document.querySelectorAll(".operator-button");

let num1 = "";
let num2 = "";
let operator = null;

displayValue.textContent = "0";

const clear = () => {
  operator = null;
  num1 = "";
  num2 = "";
  updateValue("0");
};

const ifChainOperation = () => {
  if (
    (operator === "+" ||
      operator === "-" ||
      operator === "x" ||
      operator === "/") &&
    num1 !== "" &&
    num2 !== ""
  ) {
    equal();
    num1 = displayValue.textContent;
    num2 = "";
  }
};

const add = () => {
  ifChainOperation();
  operator = "+";
};

const minus = () => {
  ifChainOperation();
  operator = "-";
};

const multiply = () => {
  ifChainOperation();
  operator = "x";
};

const divide = () => {
  ifChainOperation();
  operator = "/";
};

const del = () => {
  if (operator === null) {
    num1 = num1.slice(0, -1);
    updateValue(num1);
  } else {
    num2 = num2.slice(0, -1);
    updateValue(num2);
  }
};

const dot = () => {
  if (operator === null && num1 === "") {
    num1 += "0.";
    updateValue(num1);
  } else if (operator === null && !num1.includes(".")) {
    num1 += ".";
    updateValue(num1);
  } else if (operator !== null && num2 === "") {
    num2 += "0.";
    updateValue(num2);
  } else if (!num2.includes(".") && operator !== null) {
    num2 += ".";
    updateValue(num2);
  }
};

const equal = () => {
  resetValue();
  const number1 = Number(num1);
  const number2 = Number(num2);
  let value;
  switch (operator) {
    case "+":
      value = number1 + number2;
      updateValue(value);
      break;
    case "-":
      value = number1 - number2;
      updateValue(value);
      break;
    case "x":
      value = number1 * number2;
      updateValue(value);
      break;
    case "/":
      value = number1 / number2;
      updateValue(value);
      break;
    default:
      break;
  }
};

function updateValue(value) {
  displayValue.textContent = value;
  removeLeadingZero();
  console.log(displayValue.textContent);
}

function removeLeadingZero() {
  if (
    displayValue.textContent.indexOf("0") === 0 &&
    !displayValue.textContent.includes(".") &&
    displayValue.textContent.length > 0
  ) {
    displayValue.textContent = parseInt(displayValue.textContent);
  } else if (
    displayValue.textContent.indexOf("0") === 0 &&
    displayValue.textContent.includes(".")
  ) {
    displayValue.textContent = parseFloat(displayValue.textContent);
  }
}

function resetValue() {
  displayValue.textContent = "";
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator === null) {
      num1 += button.textContent;
      updateValue(num1);
    } else if (operator !== null) {
      num2 += button.textContent;
      updateValue(num2);
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "=":
        equal();
        break;
      case "+":
        add();
        break;
      case "-":
        minus();
        break;
      case "x":
        multiply();
        break;
      case "/":
        divide();
        break;
      case "C":
        clear();
        break;
      case "DEL":
        del();
        break;
      case ".":
        dot();
        break;
      default:
        break;
    }
  });
});
