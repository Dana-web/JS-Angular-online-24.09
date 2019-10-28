// У вас на странице есть три инпута, чекбокс(галочка) и кнопка "отправить" (итого: пять элементов).

// Ваша задача - написать валидацию. То есть, пользователь заполняет все поля, нажимает на кнопку "Отправить", а вы проверяете все ли поля заполнены корректно.

// Результат вывести в консоль (все хорошо/всё плохо).

// Список полей:

// Имя (больше 2-х символов и меньше - 40)

// Логин (должен быть заполнен/не пустой)

// Пароль (больше 8-ми символов, должна быть цифра, буква, большая буква)

// Галочка - "Прочитал условия" (должна быть включена)
//1.1

// const userName = document.querySelector('.name');
// const btn = document.querySelector('.validateBtn');
// const userLogin = document.querySelector('.login');
// const userPassword = document.querySelector('.password');
// const userCheckbox = document.querySelector('.checkbox');
// const msgOk = "it's ok";
// const msgNot = "it's wrong";

// function validateName() {
// 	userName.value.length > 2 && userName.value.length < 40 ? console.log(msgOk) : console.log(msgNot);
// }

// function validateLogin() {
// 	!userLogin.value ? console.log(msgNot) : console.log(msgOk);
// }
// function validatePassword() {
// 	const regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
// 	!userPassword.value.match(regPass) ? console.log(msgNot) : console.log(msgOk);
// }
// function validateCheckbox() {
// 	userCheckbox.checked ? console.log(msgOk) : console.log(msgNot);
// }
// function validate(event) {
// 	validateName();
// 	validateLogin();
// 	validatePassword();
// 	validateCheckbox();
// 	event.preventDefault();
// }

// btn.addEventListener('click', validate);

//1.2
// const userName = document.querySelector('.name');
// const btn = document.querySelector('.validateBtn');
// const userLogin = document.querySelector('.login');
// const userPassword = document.querySelector('.password');
// const userCheckbox = document.querySelector('.checkbox');
// const regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
// const msgOk = "it's ok";
// const msgNot = "it's wrong";

// function validate(event) {
// 	let user = {
// 		userName,
// 		userLogin,
// 		userPassword,
// 		userCheckbox
// 	};
// 	switch (user) {
// 		case userName: {
// 			const resultName = userName.value.length > 2 && userName.value.length < 40;
// 			console.log(resultName ? msgOk : nsgNot);
// 			return resultName;
// 		}
// 		case userLogin: {
// 			const resultLogin = userLogin.value.length > 0;
// 			console.log(resultLogin ? msgOk : msgNot);
// 			return resultLogin;
// 		}
// 		case userPassword: {
// 			const resultPass = userPassword.value.match(regPass);
// 			console.log(resultPass ? msgOk : msgNot);
// 			return resultPass;
// 		}
// 		case userCheckbox: {
// 			const resultCheckbox = userCheckbox.checked;
// 			console.log(resultCheckbox ? msgOk : msgNot);
// 			return resultCheckbox;
// 		}
// 		default:
// 			console.log(msgOk);
// 			break;
// 	}
// 	event.preventDefault();
// }

// btn.addEventListener('click', validate);
