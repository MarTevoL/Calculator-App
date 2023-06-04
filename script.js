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
  console.log("add");
};

const minus = () => {
  ifChainOperation();
  operator = "-";
  console.log("minus");
};

const multiply = () => {
  ifChainOperation();
  operator = "x";
  console.log("multiply");
};

const divide = () => {
  ifChainOperation();
  operator = "/";
  console.log("divide");
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
  console.log(".");
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
  console.log("equal call");
};

function updateValue(value) {
  displayValue.textContent = value;
}

function resetValue() {
  displayValue.textContent = "";
  console.log("reset value");
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
    //add if statement here to tell if there is other operator, if there is operator then call equal
    switch (button.id) {
      case "=":
        console.log("=");
        console.log(num1);
        console.log(num2);
        equal();
        break;
      case "+":
        console.log(button.id);
        add();
        break;
      case "-":
        console.log("-");
        minus();
        break;
      case "x":
        console.log("x");
        multiply();
        break;
      case "/":
        console.log("/");
        divide();
        break;
      case "C":
        console.log("C");
        clear();
        break;
      case "DEL":
        console.log("DEL");
        del();
        break;
      case ".":
        console.log(".");
        dot();
        break;
      default:
        break;
    }
  });
});

// function callOperator(oper) {
//   operator = oper;
// }
