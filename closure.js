// 1.Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.

function minus(arg) {
	let value = arg;
	return function(arg) {
		if (arg !== undefined) {
			return value - arg;
		} else if (arg == undefined) {
			return (value = 0);
		}
		return value - arg;
	};
}

//const minus = (value = 0) => (arg = 0) => value - arg;
console.log(minus()());
//2.Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

function multiplyMaker(value) {
	let result = value;
	return function(value) {
		return (result *= value);
	};
}
//const multiplyMaker = (value) =>(result) =>(result * value);
const multiply = multiplyMaker(2);

console.log(multiply(2)); // 4 (2 * 2)
console.log(multiply(1)); // 4 (4 * 1)
console.log(multiply(3)); // 12 (4 * 3)
console.log(multiply(10)); // 120 (12 * 10)

// 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5
const methodsString = (function() {
	//private
	let string;
	function setString(str) {
		string = str;
		if (typeof str === 'undefined') {
			return (str = '');
		} else if (typeof str === 'number') {
			return String(str);
		}
		return string;
	}
	function getString() {
		return this.setString(string);
	}
	function getLengthString() {
		return this.getString().length;
	}
	function reverseString() {
		return this.getString().split('').reverse().join('');
	}
	//public

	return {
		setString: setString,
		getString: getString,
		getLengthString: getLengthString,
		reverseString: reverseString
	};
})();

console.log(methodsString.setString('Do'));
console.log(methodsString.getString());
console.log(methodsString.getLengthString());
console.log(methodsString.reverseString());

// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100
let calculator = (function() {
	let data;
	return {
		setValue: function(n) {
			data = n;
			return this;
		},
		sum: function(n) {
			data += n;
			return this;
		},
		subtract: function(n) {
			data -= n;
			return this;
		},
		divide: function(n) {
			data /= n;
			return this;
		},
		toPower: function(n) {
			data = Math.pow(data, n);
			return this;
		},
		multiply: function(n) {
			data *= n;
			return this;
		},
		display: function() {
			console.log('Result: ', Math.round(data));
		}
	};
})();

calculator.setValue(10).toPower(2).display();

// calculator.setValue(10).sum(5).multiply(2).display();
