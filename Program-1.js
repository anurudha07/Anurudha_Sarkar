class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  calculate(operation) {
    switch (operation.toLowerCase()) {
      case 'add':
      case '+':
        return this.a + this.b;
      case 'subtract':
      case '-':
        return this.a - this.b;
      case 'multiply':
      case '*':
        return this.a * this.b;
      case 'divide':
      case '/':
        if (this.b === 0) {
          return 'Dividing by zero is not possible';
        }
        return this.a / this.b;
    }
  }
}

// Sample Input -------->
const a = 10.5;
const b = 5;
const operator = '/';

const calc = new Calculator(a, b);
console.log(`${a} ${operator} ${b} =`, calc.calculate(operator));

