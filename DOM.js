// Зная структуру html, с помощью изученных
// методов получить (в консоль):
// 1. head
// 2. body
// 3. все дочерние элементы body и вывести их в
// консоль.
// 4. первый div и все его дочерние узлы
// а) вывести все дочерние узлы в консоль
// б) вывести в консоль все дочерние узлы,
// кроме первого и последнего
// Для навигации по DOM использовать методы,
// которые возвращают только элементы

//1 head

let getHead1 = document.head;
console.log(getHead1);
let getHead2 = document.querySelector('head');
console.log(getHead2);
let getHead3 = document.getElementsByTagName('head');
console.log(getHead3);
// // 2. body

let getBody = document.body;
console.log(getBody);
let getBody2 = document.querySelector('body');
console.log(getBody2);
let getBody3 = document.getElementsByTagName('head');
console.log(getBody3);

// // 3. все дочерние элементы body и вывести их в
// // консоль.
let bodyAccess = document.querySelector('body');
let childrenBody = bodyAccess.children;
console.log(childrenBody);

// 4. первый div и все его дочерние узлы
// а) вывести все дочерние узлы в консоль
// б) вывести в консоль все дочерние узлы,
// кроме первого и последнего

//a)
// let getDivChild = document.getElementsByTagName('div')[0].children;
// console.log(getDivChild);

//b)
//1
let getDivFirst = document.getElementsByTagName('div')[0].children;
for (i = 1; i < getDivFirst.length - 1; i++) {
	console.log(getDivFirst[i]);
}

//2

let getChildDiv = document.querySelector('div').firstElementChild;
while ((getChildDiv = getChildDiv.nextElementSibling) && getChildDiv.nextElementSibling) {
	console.log(getChildDiv);
}

// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));

// true так как первый див является родительским элементом для mark
// isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так ul НЕ является родительским элементом для mark
// Функция принимает только DOM объекты.

function isParent(parent, child) {
	return child.closest('div') === parent;
}
console.log(isParent(document.body.children[0], document.querySelector('mark')));

function isParent(parent, child) {
	let markParent = child.parentElement; //<p></p>
	return markParent === parent;
}
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));

// 2. Получить список всех ссылок, которые не находятся внутри списка ul
// let links=Array.from(link).filter(link => !link.closest('ul'))

function getLinksOutUl(node) {
	let links = document.querySelectorAll('a');
	const result = [];

	for (i = 0; i < links.length; i++) {
		if (!links[i].closest('ul')) {
			result.push(links[i]);
		}
	}

	return result.map((item) => item.innerText);
}
console.log(getLinksOutUl(document.querySelector('ul')));

// 3. Найти элемент, который находится перед и после списка ul

let prevUl = document.querySelector('ul').previousElementSibling;
let nextUl = document.querySelector('ul').nextElementSibling;
console.log(prevUl, nextUl);

// 5. *В коде с занятия написать функцию по редактированию задачи.
// 6. *Подумать и улучшить функцию generateId();
