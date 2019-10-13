// 1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// Первая функция возвращает строку “New value: ” и результат обработки:

// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

// Подсказка: secondFunc должна быть представлена функцией, которая принимает
// один аргумент (каждый элемент массива) и возвращает результат его обработки

// const dataWords = ['my', 'name', 'is', 'Trinity'];
// const dataNumbers = [10, 20, 30];
// const dataUsers = [{
//   age: 45,
//   name: 'Jhon'
// }, {
//   age: 20,
//   name: 'Aaron'
// }];
// const dataForInvert = ['abc', '123'];

// function upperLetter(word) {
//   let firstUpLetter = dataWords.map((word) => {
//     return word[0].toUpperCase() + word.slice(1);
//   });
//   return firstUpLetter.join('').replace(/\s/g, '');
// }

// function multiplyByTen(number) {
//   let toHundred = dataNumbers.map((number) => {
//     return number * 10;
//   });
//   return toHundred;
// }

// function dataOfUsers(user) {
//   let interpretData = dataUsers.map(user => {
//     return `${user.name} is ${user.age}`
//   });
//   return interpretData;
// }

// function invertElem(el) {
//   let invertData = dataForInvert.map(el => {
//     return el.split("").reverse().join("");
//   });
//   return invertData;
// }

// function parental(data, callback) {
//   let msg = 'New value: ';
//   //return msg + upperLetter();
//   //return msg + multiplyByTen();
//   //return msg + dataOfUsers();
//   return msg + invertElem();
// }

// //console.log(parental(dataWords, upperLetter));
// //console.log(parental(dataNumbers, multiplyByTen));
// //console.log(parental(dataUsers, dataOfUsers));
// console.log(parental(dataUsers, invertElem));



// 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). 
//Callback  должен принимать один элемент массива, его индекс в массиве и весь массив.

// Что такое метод every можно прочитать здесь и ниже в презентации тоже о них идет речь.

// const arrNumbers = [7, 8, 5, 45, 89, 170, 48];

// function checkNumber(element, index, array) {
//   //return arrNumbers.every(element => element > 5);

//   for (i = 0; i < arrNumbers.length; i++) {
//     if (arrNumbers[i] < 5) {
//       return false
//     }
//   }
//   return true;
// }

// function likeEvery(data, callback) {
//   if (Array.isArray(data) === true && typeof callback == 'function') {
//     return checkNumber();
//   }
// }
// console.log(likeEvery(arrNumbers, checkNumber));