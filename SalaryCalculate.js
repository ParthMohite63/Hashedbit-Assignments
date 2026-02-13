const prompt = require("prompt-sync")();

let salary = Number(prompt("Enter your salary: "));

function findTax(salary) {
  let tax = 0;

  switch (true) {
    case salary > 0 && salary <= 500000:
      tax = 0;
      break;

    case salary <= 1000000:
      tax = salary * 0.10;
      break;

    case salary <= 1500000:
      tax = salary * 0.20;
      break;

    case salary > 1500000:
      tax = salary * 0.30;
      break;

    default:
      console.log("Invalid salary");
      return;
  }

  console.log("Tax Amount:", tax);
}

findTax(salary);
