// Заняття 2. Слайд 12
// Чему равно а, почему ?

let a = 0 || "string"; // ‘string’;  0 - false, ‘string’ - true
let a = 1 && "string"; // 'string'; 1-false, 'string'-true
let a = null || 25; //25; null-false, 25-true
let a = null && 25; //null; null-true, 25-false
let a = null || 0 || 35; //35; null and 0- false, 35- true
let a = null && 0 && 35; //null; null-true; 0 and 35- false

// Что отобразится в консоли.Почему ?

//   12 + 14 + '12' // Додавання перших двох символів (числовий тип)>конкатенація з '12' (стрічка)>перетворення в стрічку, як результат '2612'

// 3 + 2 - '1' // Арифметична операція, оскільки віднімання стрічки(перетворюється в число), як результат 4
// '3' + 2 - 1 //віднімання однакових типів даних, а потім конкатенація, як результат 31
// true + 2// true прирівнюється 1, як результат 3
//   + '10' + 1 //перетворення в числовий тип даних за допомогою +, результат 11
// undefined + 2 // NAN в арифметичних операціях null конвертується в 0, а undefined повертає NaN
// null + 5 // 5 null -0
// true + undefined// NAN
