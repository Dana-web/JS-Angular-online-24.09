//Заняття 2 Слайд 16
// 1.Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
// let hide = prompt("Enter true word", "");
// if (hide === "hidden") {
//   hide = "visible";
// } else {
//   hide = "hidden";
// }
// console.log(hide);

// 2.Используя if, записать условие:
// если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10(использовать краткую запись).

// let int = +prompt("Make your choice");
// if (int === 0) {
//   int = 1;
// } else if (int < 0) {
//   int = "less then zero";
// } else if (int > 0) {
//   int *= 10;
// } else {
//   int = "Enter true answer";
// }
// console.log(int);

//3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
//Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и
//свойство needRepair в объекте car изменить на true; иначе изменить на false.

(function() {
  let car = { name: "Lexus", age: 10, create: 2008, needRepair: false };
  //console.log(car.needRepair);
  if (car.age > 5) {
    console.log("Need Repair");
    car.needRepair = true;
  } else {
    car.needRepair = false;
  }
})();

// 4. Дан объект
// Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет.иначе если поля discount нет то вывести просто поле price в консоль.

let item = { name: "Intel core i7", price: "100$", discount: "15%" };
if (item.discount && item.discount !== "") {
  let discount = parseFloat(item.discount);
  let price = parseFloat(item.price);
  item.priceWithDiscount = `${price - (price * discount) / 100}$`;
  console.log("Ціна зі знижкою: " + item.priceWithDiscount);
} else {
  console.log(item.price);
}

// 5. Дан следующий код:
//Написать условие если(цена товара больше или равна минимальной цене) и(меньше или равна максимальной цене) то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let product = {
  name: "Яблоко",
  price: "10$"
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена
let price = parseFloat(product.price);
if (price >= min && price <= max) {
  console.log(`Назва товару: ${product.name}`);
} else {
  console.log("Товари не знайдено");
}
