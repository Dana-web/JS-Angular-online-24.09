// 1.Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

// function squareRectangle(rectangle) {
//   let unit = "cm";
//   let unitInSquare = '2'.sup();
//   let square = parseFloat(this.width) * parseFloat(this.height);
//   let msgSquare = `The area of our figure is ${square} ${unit}${unitInSquare}`;
//   return msgSquare;
// }
// const rectangle = {
//   width: "22сm",
//   height: "11сm",
//   getSquare: squareRectangle
// }
// console.log(rectangle.getSquare()); // в консолі буде просто тег sup, але якщо на HTML-page, то нормально

// 2.Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5

// function initialPrice(product) {
//   return parseInt(this.price)
// };

// function showWithDiscount(product) {
//   let getDiscount = parseInt(this.price) - ((parseInt(this.price) * parseFloat(this.discount)) / 100);
//   return getDiscount;
// }
// const product = {
//   price: 10,
//   discount: '15%',
//   getPrice: initialPrice,
//   getPriceWithDiscount: showWithDiscount
// };

// console.log(product.getPrice());
// console.log(product.getPriceWithDiscount());

// 3.Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

//3.1
// const figure = {
// 	height: 10,
// 	getNewHeight: function() {
// 		return ++this.height;
// 	}
// };

// console.log(figure.getNewHeight());

//3.2
// function getgreaterByOne(figure) {
// 	let newHeight = parseInt(this.height);
// 	newHeight++;
// 	return `New height: ${newHeight}`;
// }
// const figure = {
// 	height: 10,
// 	greaterByOne: getgreaterByOne
// };

// console.log(figure.greaterByOne());

// 4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
//     value: 1,
//     double: function () {...},
//     plusOne: function () {...},
//     minusOne: function () {...},
// }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3

// const numerator = {
// 	value: 1,
// 	double: function() {
// 		this.value *= this.value;
// 		return this;
// 	},
// 	plusOne: function() {
// 	this.value++;
// 		return this;
// 	},
// 	minusOne: function() {
// 		this.value--;
// 		return this;
// 	}
// };
// numerator.double().plusOne().minusOne();
// console.log(numerator.value)

//This. Задачі

// 1.Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)

//1.1
// function getGeneralPrice(currency) {
//   return this.retailPrice * this.quantity + currency;
// }
// const products = {
//   retailPrice: 20,
//   quantity: 10
// }
// console.log(getGeneralPrice.apply(products, ['$']))

//1.2.
// const products = {
// 	retailPrice: 20,
// 	quantity: 10,
// 	getGeneralPrice: function(currency) {
// 		return this.retailPrice * this.quantity + currency;
// 	}
// };
// console.log(products.getGeneralPrice('$'));

//2. Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.

// const newProducts = {
// 	retailPrice: 15,
// 	quantity: 7
// };
// console.log(products.getGeneralPrice.call(newProducts, '$'));

// 3.Даны объект и функция:

// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes

// let sizes = { width: 5, height: 10 },
//   getSquare = function () { return this.width * this.height };
// console.log(getSquare.call(sizes));

//4.  Измените функцию getElementHeight таким образом, чтобы можно
//было вызвать getElementHeight() и получить 25.

// let element = {
// 	height: 25,
// 	getHeight: function() {
// 		return this.height;
// 	}
// };
// let getElementHeight = element.getHeight.bind(element);
// console.log(getElementHeight());
