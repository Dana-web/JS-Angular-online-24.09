// 1. Создать объект с полем product, равным ‘iphone’
const store = {};
store.product = "iphone";
//console.log(store.product);
// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
store.price = 1000;
store.currency = "dollar";
//console.log(store);
// 3. Добавить поле details, которое будет содержать объект с полями model и color
const otherChar = {
  model: "x",
  color: "white"
};
store.details = { ...otherChar };
//console.log(store.details);
//console.log(store.details.model);
// Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.
