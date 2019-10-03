// 1. Записать в виде switch case следующее условие:
//   if (a === ‘block’) {
//     console.log(‘block’)
//   } else if (a === ‘none’) {
//     console.log(‘none’)
//   } else if (a === ‘inline’) {
//     console.log(‘inline’)
//   } else {
//     console.log(‘other’)
//   }

const a = prompt("Type the word");
switch (a) {
  case "a === block":
    console.log("block");
    break;
  case "a === none":
    console.log("none");
    break;
  case "a === inline":
    console.log("inline");
    break;
  default:
    console.log("other");
}
// 2.  Записать условие, используя конструктор switch.В консоли должно отразиться только одно значение.

const number = prompt("enter number");
let searchPar = number % 2;
switch (searchPar) {
  case 0:
    console.log(`Even number: ${number}`);
    break;
  case 1:
  case 2:
    console.log(`Odd number: ${number}`);
    break;
  default:
    console.log("Not appropriate conditions");
}

// 3.  Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.
// 3.1.Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let hide = prompt("Enter true word", "");
hide === "hidden"
  ? console.log((hide = "visible"))
  : console.log((hide = "hidden"));

//3.2.Используя if, записать условие:
// если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10(использовать краткую запись).

let int = +prompt("Make your choice");
int === 0
  ? (int = 1)
  : int < 0
  ? (int = "less then zero")
  : int > 0
  ? (int *= 10)
  : (int = "Enter true answer");
console.log(int);

// 3.3 Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и
// свойство needRepair в объекте car изменить на true; иначе изменить на false.

//3.3.1
// let car = { name: "Lexus", age: 10, create: 2008, needRepair: false };
// car.age > 5 ? (car.needRepair = true) : (car.needRepair = false);

//3.3.2
let car = { name: "Lexus", age: 10, create: 2008, needRepair: false };
function checkCarAge(car) {
  return car.age > 5 ? (car.needRepair = true) : (car.needRepair = false);
}
console.log(checkCarAge(car));


