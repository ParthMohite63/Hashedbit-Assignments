const prompt = require("prompt-sync")();

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let operator = prompt("Enter operator (+, -, *, /): ");

function calculator(n1, n2, op) {
  switch (op) {
    case "+":
      console.log("Result:", n1 + n2);
      break;

    case "-":
      console.log("Result:", n1 - n2);
      break;

    case "*":
      console.log("Result:", n1 * n2);
      break;

    case "/":
      if (n2 !== 0) {
        console.log("Result:", n1 / n2);
      } else {
        console.log("Cannot divide by zero!");
      }
      break;

    default:
      console.log("Invalid operator!");
  }
}


calculator(num1, num2, operator);
