// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств. Вызов:


function Calculator(params) {
  this.read = function () {
    this.firstValue = parseInt(prompt("Enter the first number"));
    this.secondValue = parseInt(prompt("Enter the second number"));
  }
  this.sum = function () {
    return this.firstValue + this.secondValue;
  }
  this.mul = function () {
    return this.firstValue * this.secondValue;
  }

}
let calculator = new Calculator();
calculator.read();
console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());