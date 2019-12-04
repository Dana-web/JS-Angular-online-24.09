// 1.Есть класс Planet
// function Planet(name) {
//     this.name = name;
//     this.getName = function () {
//         return 'Planet name is ' + this.name;
//     }
// }

// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// принимать, кроме name, название спутника (satelliteName). Переопределите метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
// дополнительный текст 'The satellite is' + satelliteName.
// Например:
// var earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); // 'Planet name is earth. The satellite is moon’

class Planet {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return 'Planet name is ' + this.name + '. ';
  }
}
class PlanetWithSatellite extends Planet {
  constructor(name, satelliteName) {
    super(name);
    this.satelliteName = satelliteName;
  }
  getName() {
    return super.getName() + 'The satellite is ' + this.satelliteName;
  }
}

// let earth = new PlanetWithSatellite('earth', 'moon');
// console.log(earth.getName());

// 2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
// Создайте наследников этого класса:
// классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование

// У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}

// У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)

class Building {
  constructor(name, countOfFloors) {
    this.name = name;
    this.countOfFloors = countOfFloors;
  }
  setCountOfFloors(value) {
    this.countOfFloors = value;
  }
  getCountOfFloors() {
    return this.countOfFloors;
  }
}

const building = new Building('Avalon', 12);
building.setCountOfFloors(13);
console.log(building.getCountOfFloors())

class House extends Building {
  constructor(name, countOfFloors, countOfShops) {
    super(name, countOfFloors)
    this.countOfShops = countOfShops;
  }
  getCountOfFloors() {
    return {
      floors: this.countOfFloors,
      shops: this.countOfFloors * this.countOfShops
    }
  }
}

const house = new House('House', 3, 3);
console.log(house.getCountOfFloors());

class Mall extends Building {
  constructor(name, countOfFloors, countOfFlats) {
    super(name, countOfFloors)
    this.countOfFlats = countOfFlats;
  }
  getCountOfFloors()
    return {
      floors: this.countOfFloors,
      flats: this.countOfFloors * this.countOfFlats
  }
}
const shop = new House('Shop', 3, 3);
console.log(shop.getCountOfFloors());

// 3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и
// “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

class Furniture {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
Furniture.prototype.getInformation = function () {
  return 'The name of furniture is ' + this.name + '. ' + 'It\'s price is ' + this.price + '$.'
}
class OfficeFurniture extends Furniture {
  constructor(name, price, isComputerDesk) {
    super(name, price);
    this.isComputerDesk = isComputerDesk;
  }
  getInformation() {
    return super.getInformation() + ' There\'s a computer desk, right: ' + this.isComputerDesk;
  }
}
class HomeFurniture extends Furniture {
  constructor(name, price, bed) {
    super(name, price);
    this.bed = bed;
  }
  getInformation() {
    return super.getInformation() + ' There\'s a computer desk, right: ' + this.bed;
  }
}
const furniture = new Furniture('bookcase', 300);
console.log(furniture.getInformation());
const officeFurniture = new OfficeFurniture('table', 100, true);
console.log(officeFurniture.getInformation())
const homeFurniture = new HomeFurniture('table', 100, false);
console.log(homeFurniture.getInformation())

// 4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
// true/false, должно быть скрытым). Свойства определяются в момент вызова
// конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)

class User {
	constructor(name, date) {
		this.name = name;
		this.date = date;
	}
}
User.prototype.getInfo = function() {
	return 'Name: "' + this.name + '" Date: "' + this.date + '"';
};
class Admin extends User {
	constructor(name, date, superAdmin) {
		super(name, date);
		this.isSuperAdmin = function() {
			return superAdmin;
		};
	}
	getInfo() {
		return super.getInfo() +". Super admin: "+ this.isSuperAdmin();
	}
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

class Guest extends User {
	constructor(name, date) {
		super(name, date);
		this.validDate = new Date(date.getTime());
		this.validDate.setDate(date.getDate() + 7);
	}
	getInfo() {
		return super.getInfo() + ', validDate: "' + this.validDate + '"';
	}
}
let user = new User('User', new Date(2019, 11, 06));
console.log(user.getInfo());
let admin = new Admin('Admin', new Date(2019, 11, 11), true);
console.log(admin.getInfo());
let guest = new Guest('Guest',new Date());
console.log(guest.getInfo());



