// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре.Использовать for или while.

//1.1
const str = "i am in the easycode";
let strToArr = str.split(' ');
for (let i = 0; i < strToArr.length; i++) {
  strToArr[i] = strToArr[i][0].toUpperCase() + strToArr[i].slice(1, strToArr[i].length);
}
console.log(strToArr.join(' '))

//1.2
//const str = "i am in the easycode";
// let newStr = "";
// for (let i = 0; i < str.length; i++) {
//   newStr += str[i - 1] == " " ? str[i].toUpperCase() : str[i];
// }
// console.log(newStr);

// 2. Дана строка “tseb eht ma i”.Используя циклы, сделать строку - перевертыш(то есть последняя буква становится первой, предпоследняя - второй итд).
const mess = "tseb eht ma i";
let msgNew = "";
for (let i = mess.length - 1; i >= 0; i--) {
  msgNew += mess[i];
}
console.log(msgNew);
// 3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3 * 2 * 1, 5! = 5 * 4 * 3 * 2 * 1. С помощью циклов вычислить факториал числа 10. Использовать for.
let n = 1;
for (i = 1; i <= 10; i++) {
  n *= i;
}
console.log(n);

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
//   где каждое слово начинается с большой буквы, а пробелы удалены.Использовать for.

// 4.1
//const jsMsg = "JavaScript is a pretty good language";
// let newMsg = "";
// for (let i = 0; i < jsMsg.length; i++) {
//   newMsg += jsMsg[i - 1] == " " ? jsMsg[i].toUpperCase() : jsMsg[i];
// }
// let outSpace = newMsg.replace(/\s/g, "");
// console.log(outSpace);

//4.2
const jsMsg = "JavaScript is a pretty good language";
let newMsg = jsMsg.split(' ');
for (let i = 0; i < newMsg.length; i++) {
  newMsg[i] = newMsg[i][0].toUpperCase() + newMsg[i].slice(1, newMsg[i].length);
}
let changeJsMsg = newMsg.join('')
let outSpace = changeJsMsg.replace(/\s/g, "");
console.log(outSpace);




// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль.Массив[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (item of numbersArr) {
  if (item % 2 !== 0) {
    console.log(item);
  }

}

// 6. Дан объект:
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре.Использовать for in.
let list = {
  name: "denis",
  work: "easycode",
  age: 29
}
for (let key in list) {
  if (typeof list[key] === "string") {
    let capitLetter = list[key].toUpperCase();
    console.log(capitLetter);
  }
}