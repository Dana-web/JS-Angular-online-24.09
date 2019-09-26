//Заняття 1. Слайд 13
//1. Получить число pi из Math и округлить его до 2-х знаков после точки
//1.1
function rounfOffPi(number) {
  let roundPi = Math.round(Math.PI * 100) / 100;
  return roundPi;
}
console.log(rounfOffPi());
//1.2
let numberPi = Math.PI;
let roundNumbPi = +numberPi.toFixed(2);
console.log(roundNumbPi); //typeof number;

//2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

const maxNumber = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
const minNumber = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
const showDate = `Max number:${maxNumber}, Min number: ${minNumber}`;
console.log(showDate);

//3. Работа с Math.random:
//a.Получить случайное число и округлить его до двух цифр после запятой
//b.Получить случайное целое число от 0 до X.X - любое произвольное число.

//a
function getRandomNumb(numb) {
  return Math.round(Math.random() * 100) / 100;
}
console.log(getRandomNumb(10));

//b
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomInt(0, 100.7));

//4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду(1.3) ?

let sum = 0.6 + 0.7;
let res = parseFloat(sum.toFixed(1));
console.log(res);

//5. Получить число из строки ‘100$’

let getInt = parseInt("100$");
console.log(getInt);
