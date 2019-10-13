//HW3
// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.

// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

// let users = [{
// 	name: 'Denis',
// 	age: '29'
// }, {
// 	name: 'Ivan',
// 	age: '20'
// }];

// function funcGetUsers(data, property, propValue) {
// 	data.slice().filter((item) => item[property] === propValue);
// 	data.forEach(function (user) {
// 		return user[property] = propValue;
// 	});
// 	return data;
// }
// console.log(funcGetUsers(users, 'gender', 'male'));

//HW4

// 1.На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
// let arr = [1, 2, 3, 5, 8, 9, 10];
// let newArr = arr.map(function (item) {
//   if (item % 2 === 0) {
//     return {
//       digit: item,
//       odd: true
//     };
//   } else {
//     return {
//       digit: item,
//       odd: false
//     };
//   }
// });
// console.log(newArr);

//2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.
//2.1
// function zeroCheck(data) {
//   data.forEach(digit => {
//     return parseInt(digit) == 0;
//   })
//   return false;
// };
// console.log(zeroCheck([12, 4, 50, 1, 0, 18, 40]));

//2.2
// function zeroCheck(data) {
//   let showResult = data.every(digit => {
//     return parseInt(digit) == 0;
//   })
//   return showResult;
// };
// console.log(zeroCheck([12, 4, 50, 1, 0, 18, 40]));

//3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

// function checkWords(dataWords) {
//   let answer = dataWords.some(word => {
//     return word.length > 3;
//   })
//   return answer;
// }
// console.log(checkWords(['yes', 'hello', 'no', 'easycode', 'what']));

//4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}

// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

// Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения
// строки
// let dataObjects = [{
//   char: "a",
//   index: 12
// }, {
//   char: "w",
//   index: 8
// }, {
//   char: "Y",
//   index: 10
// }, {
//   char: "p",
//   index: 3
// }, {
//   char: "p",
//   index: 2
// }, {
//   char: "N",
//   index: 6
// }, {
//   char: " ",
//   index: 5
// }, {
//   char: "y",
//   index: 4
// }, {
//   char: "r",
//   index: 13
// }, {
//   char: "H",
//   index: 0
// }, {
//   char: "e",
//   index: 11
// }, {
//   char: "a",
//   index: 1
// }, {
//   char: " ",
//   index: 9
// }, {
//   char: "!",
//   index: 14
// }, {
//   char: "e",
//   index: 7
// }];

// function sortIndexWords(dataObjects) {
//   let sortIndex = dataObjects.sort((prop1, prop2) => {
//     return prop1.index - prop2.index;
//   })
//   let gatherMsg = sortIndex.reduce((acc, prop1) => {
//     return acc + prop1.char;
//   }, '');
//   return gatherMsg;
// }
// console.log(sortIndexWords(dataObjects))

//Метод Sort. Задачи.

// 1. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

// function sortleastArr(listArrays) {
// 	let showList = listArrays.sort((prevArr, nextArr) => {
// 		return prevArr.length - nextArr.length;
// 	});
// 	return showList;
// }
// console.log(sortleastArr([
// 	[14, 45],
// 	[1],
// 	['a', 'c', 'd']
// ]));

//2. Отсортировать их по возрастающему количеству ядер (cores).
// Есть массив объектов:
// [
//     {cpu: 'intel', info: {cores:2, сache: 3}},
//     {cpu: 'intel', info: {cores:4, сache: 4}},
//     {cpu: 'amd', info: {cores:1, сache: 1}},
//     {cpu: 'intel', info: {cores:3, сache: 2}},
//     {cpu: 'amd', info: {cores:4, сache: 2}}
// ]

// let dataCores = [{
// 		cpu: 'intel',
// 		info: {
// 			cores: 2,
// 			сache: 3
// 		}
// 	},
// 	{
// 		cpu: 'intel',
// 		info: {
// 			cores: 4,
// 			сache: 4
// 		}
// 	},
// 	{
// 		cpu: 'amd',
// 		info: {
// 			cores: 1,
// 			сache: 1
// 		}
// 	},
// 	{
// 		cpu: 'intel',
// 		info: {
// 			cores: 3,
// 			сache: 2
// 		}
// 	},
// 	{
// 		cpu: 'amd',
// 		info: {
// 			cores: 4,
// 			сache: 2
// 		}
// 	}
// ];

// function sortCores(dataCores) {
// 	let numberCores = dataCores.sort((prevCore, nextCore) => {
// 		return prevCore.info.cores - nextCore.info.cores;
// 	});
// 	return numberCores;
// }
// console.log(sortCores(dataCores));

//3.Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

// let products = [
// 	{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
// 	{title: 'prod3', price: 15}, {title: 'prod4', price: 25},
// 	{title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
// 	{title: 'prod7', price: 19}, {title: 'prod8', price: 63}
// ];

// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]

// let products = [{
// 		title: 'prod1',
// 		price: 5.2
// 	},
// 	{
// 		title: 'prod2',
// 		price: 0.18
// 	},
// 	{
// 		title: 'prod3',
// 		price: 15
// 	}, {
// 		title: 'prod4',
// 		price: 25
// 	},
// 	{
// 		title: 'prod5',
// 		price: 18.9
// 	}, {
// 		title: 'prod6',
// 		price: 8
// 	},
// 	{
// 		title: 'prod7',
// 		price: 19
// 	}, {
// 		title: 'prod8',
// 		price: 63
// 	}
// ];

// function filterCollection(products, minPrice, maxPrice) {
// 	let iteratePrices = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
// 	let sortPrices = iteratePrices.sort((minPrice, maxPrice) => {
// 		return parseInt(minPrice.price) - parseInt(maxPrice.price)
// 	})
// 	return sortPrices;
// }
// console.log(filterCollection(products, 15, 30))