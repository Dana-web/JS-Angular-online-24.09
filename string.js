// Заняття 1. Слайд 10


// 1. Получить первую и последнюю буквы строки

const string = 'some test string';
let firstLetter=string[0];
let lastLetter=string[string.length-1];
console.log(firstLetter);
console.log(lastLetter);

// 2. Сделать первую и последнюю буквы в верхнем регистре

let firstLetterUpper=firstLetter.toUpperCase();
let lastLetterUpper=lastLetter.toUpperCase();
console.log(firstLetterUpper);
console.log(lastLetterUpper);

// 3. Найти положение слова ‘string’ в строке

//a)по індексу букви

let stringPosition=string.indexOf("string");
console.log(stringPosition);


//б)візуально положення(index) слова

let changeSpace=string.replace(/ /g, ',');
let strToArr=changeSpace.split(',');
console.log(strToArr);
let searchPositionArr=strToArr.indexOf("string");
let visualPosition=searchPositionArr + 1;
console.log(visualPosition);

// 4. Найти положение второго пробела (“вручную” ничего не считать)
//не знаю як це зробити((


function searchSecondSpace(str) {
  let showSpacePosition = str.indexOf(' ', str.indexOf(' ') + 1);
return showSpacePosition;
}
console.log(searchSecondSpace('some test string'));

//5 Получить строку с 5-го символа длиной 4 буквы

let strFourLetters=string.substr(5, 4);
console.log(strFourLetters);

//6 Получить строку с 5-го по 9-й символы

let strfrom5To9= string.slice(5, 9);
console.log(strfrom5To9);

//7 Получить новую строку из исходной путем удаления последних 6-и символов
//(то есть исходная строка без последних 6и символов)

let newStr=string.substr(0, string.length - 6);
console.log(newStr);

//8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
//содержаться текст “2016”, назву замість string  newString бо вже є інша оголошена


let a = 20, b = 16;
let newString=`${a}${b}`;
console.log(newString);

