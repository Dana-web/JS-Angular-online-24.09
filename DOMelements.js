// // 1. Найти параграф и получить его текстовое содержимое (только текст!)

const paragText = document.querySelector('p').innerText;
console.log(paragText);

// // 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).
function infoNode(node) {
	const aboutNode = {
		type: node.nodeType,
		name: node.nodeName,
		child: node.childNodes,
		showChild: function() {
			return !this.child ? 0 : this.child.length;
		}
	};

	return aboutNode.showChild();
}

// console.log(infoNode(document.querySelector('p')));
// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

// function getTextFromUl(ul) {
//   let links = Array.from(document.querySelectorAll('a')).filter(link => link.closest('ul'));
//   return links;
// }
// console.log(getTextFromUl(document.querySelector('ul')));

function getTextFromUl(ul) {
	let linksText = [];
	for (let i = 0, j = ul.length; j > i; i++) {
		linksText.push(ul[i].firstChild.nodeValue);
	}
	return linksText;
}
console.log(getTextFromUl(document.querySelectorAll('ul li a')));

// // 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// // -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

function replaceText(node) {
	let child = node.childNodes;
	for (i = 0; i < child.length; i++) {
		if (child[i].nodeType == 3) {
			child[i].textContent = 'text';
		}
	}
	return child[i];
}
replaceText(document.querySelector('p'));

// 1. Найти в коде список ul и добавить класс “list”

let ul = document.querySelector('ul').classList.add('list');

// // 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link

function findLink(node) {
	while (node && (node = node.nextSibling))
		if (node.tagName == 'A') {
			return node.setAttribute('id', 'link');
		}
}
console.log(findLink(document.querySelector('ul')));

// //3. На li через один (начиная с самого первого) установить класс “item”

function setClassItem(node) {
	let addItem = Array.from(node).forEach((link, index) => {
		if (index % 2 != 0) {
			link.classList.add('item');
		}
	});
	return addItem;
}
setClassItem(document.querySelectorAll('li'));

// 4. На все ссылки в примере установить класс “custom-link”

let links = Array.from(document.querySelectorAll('a')).filter((link) => link.classList.add('custom-link'));

//Задачи

// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// <ul>
// <li><a href="#">Link1</a></li>
// ...
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

function createLi() {
	let ul = document.querySelector('ul');
	let newLi = document.createElement('li');
	newLi.setAttribute('class', 'new-item');
	let children = ul.children.length;
	let newLiText = document.createTextNode('item' + ' ' + children);
	newLi.appendChild(newLiText);
	ul.appendChild(newLi);
}
document.addEventListener('click', createLi);

// 2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong).

function getLinksUl(node) {
	let links = document.querySelectorAll('a');
	const result = [];

	for (i = 0; i < links.length; i++) {
		if (links[i].closest('ul')) {
			result.push(links[i]);
		}
	}
	return result.map((item) => item.insertAdjacentHTML('afterbegin', '<strong></strong'));
}
getLinksUl(document.querySelector('ul'));

// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.
let img = document.createElement('img');
img.setAttribute('src', 'ai.jpeg');
img.setAttribute('alt', 'artificial intelligence');
let firstChildBody = document.querySelector('body').children[0];
document.body.insertBefore(document.body.appendChild(img), firstChildBody);
// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
let mark = document.querySelector('mark');
let insertText = document.createTextNode(' green');
mark.appendChild(insertText);
mark.classList.add('green');

// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)

let ulList = document.querySelector('ul');
let childs = Array.from(ulList.childNodes).reverse();
ulList.textContent;
childs.forEach((item) => {
	ulList.appendChild(item);
});

// 6. Дан массив пользователей, его можно скопировать отсюда из первой задачи, создать таблицу вида:

// Условия:
// В конце таблицы обязательно последняя tr должна содержать total balance всех пользователей из таблицы при этом он должен быть всегда выровнен по правому краю.
// Количество пользователей может быть любым.
// Таблица и все ее содержимое должно создаваться через js, в разметке у вас может быть только контейнер какой то.
// В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков th которые будут выводиться в таблице. Что то типа { name: ‘Name’, email: ‘Email’... } соответственно ключ объекта это ваше поле которое вы хотите вывести из объекта пользователя а значение это заголовок th.
const users = [
	{
		'#': 1,
		Name: 'Buckner Osborne',
		Email: 'bucknerosborne@empirica.com',
		Balance: 2853.33
	},
	{
		'#': 2,
		Name: 'Rosalie Smith',
		Email: 'rosaliesmith@katakana.com',
		Balance: 1464.63
	},
	{
		'#': 3,
		Name: 'Estrada Davenport',
		Email: 'estradadavenport@ebidco.com',
		Balance: 2823.39
	}
];

function generateTableHead(table, data) {
	let thead = table.createTHead();
	let row = thead.insertRow();
	for (key of data) {
		let th = document.createElement('th');
		th.classList.add('forTdUsers');
		let text = document.createTextNode(key);
		th.appendChild(text);
		row.appendChild(th);
	}
}

function generateTable(table, users) {
	for (let element of users) {
		let row = table.insertRow();
		for (key in element) {
			let cell = row.insertCell();
			cell.classList.add('forTdUsers');
			let text = document.createTextNode(element[key]);
			cell.appendChild(text);
		}
	}
}
function totalBalance(users) {
	let result = [];
	for (var i = 0; i < users.length; i++) {
		result.push(users[i].Balance);
	}
	return result.reduce(function(acc, val) {
		return acc + val;
	}, 0);
}
let total = totalBalance(users);
function showTotalBalance() {
	let tr = document.createElement('tr');
	let th1 = document.createElement('td');
	let th2 = document.createElement('td');
	let th3 = document.createElement('td');
	tr.appendChild(th1);
	tr.appendChild(th2);
	tr.appendChild(th3);
	let totalResult = document.createTextNode('Total balance: ' + total);
	tr.appendChild(totalResult);
	tr.style.textAlign = 'right';
	table.appendChild(tr);
}

let table = document.querySelector('table');
let data = Object.keys(users[0]);

generateTableHead(table, data);
generateTable(table, users);
showTotalBalance();
