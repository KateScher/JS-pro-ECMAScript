/* Задание 1 (тайминг 20 минут)
Напишите функцию getPrototypeChain(obj), которая будет возвращать цепочку прототипов для заданного объекта obj. Функция должна вернуть массив прототипов, начиная от самого объекта и заканчивая глобальным объектом Object.prototype. 
const obj = {};
const prototypeChain = getPrototypeChain(obj);
console.log(prototypeChain);   */

const MusicSeries = {
  model: "music series",
  power: 200,
  batterySize: 2100,
  boxSize: 0.5,
  workTime: 45,
  startWipe() {
    console.log("I am the method of MusicSeries");
    console.log("I am starting to wipe the floor...");
  },
};

const Blues = {
  model: "Bluees-1",
  power: 250,
  batterySize: 2500,
  workTime: 50,
};

Object.setPrototypeOf(Blues, MusicSeries);

getPrototypeChain = (obj) => {
  const protoChain = [];
  let current = obj;
  while (current !== null) {
    protoChain.push(current);
    current = Object.getPrototypeOf(current);
  }
  return protoChain;
};
const something = getPrototypeChain(Blues);
console.log(something);
something.forEach((el) => console.log(el.model));

// 2й вариант
const MusicSeries2 = {
  model: "music series",
  power: 200,
  batterySize: 2100,
  boxSize: 0.5,
  workTime: 45,
  startWipe() {
    console.log("I am the method of MusicSeries");
    console.log("I am starting to wipe the floor...");
  },
};

const Blues2 = {
  model: "Bluees-1",
  power: 250,
  batterySize: 2500,
  workTime: 50,
};
function getPrototypeChain(obj) {
  const prototypeChain = [];
  let currentObj = obj;

  while (currentObj !== null) {
    prototypeChain.push(currentObj);
    currentObj = Object.getPrototypeOf(currentObj);
  }

  return prototypeChain;
}

console.log(getPrototypeChain(Blues.model));

/* Задание 2. Создайте класс Animal, который будет представлять животное. У класса Animal должны быть следующие свойства и методы:

Свойство name - имя животного.
Метод speak() - выводит в консоль звук, издаваемыйданным животным.

Создайте подкласс Dog, который наследует класс Animal. Для подкласса Dog добавьте дополнительное свойство и метод:

Свойство breed - порода собаки.
Метод fetch() - выводит в консоль сообщение "Собака [name] принесла мяч.".*/
/*const animal1 = new Animal("Животное");
animal1.speak(); // Вывод: Животное издает звук.

const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Животное Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.
// Добавьте в класс animal метод который будет принимать параметром другой объект animal и выводить в консоль сообщение о том какое животное разговаривает если вызвать метод speak на объекте с именем Кот и передать в него другой объект с именем Собака то метод должен вывести в консоль сообщение типа Кот разговаривает со Собакой */

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`Животное ${this.name} издает звук `);
  }

  whichAnimalSpeak() {
    console.log();
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  fetch() {
    console.log(`Собака ${this.name} принесла мяч`);
  }
}

const animal1 = new Animal("Кот");
animal1.speak(); // Вывод: Животное издает звук.

const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Животное Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.

// 2Й вариант
/* Добавьте в класс animal метод который будет принимать параметром другой объект animal и выводить в консоль
// сообщение о том какое животное разговаривает если вызвать метод speak на объекте с именем Кот и передать в него
// другой объект с именем Собака то метод должен вывести в консоль сообщение типа Кот разговаривает со Собакой*/

class Animal {
  constructor(name, sound = "звук") {
    this.name = name;
    this.sound = sound;
  }

  speak(obj = null) {
    if (obj !== null) {
      console.log(`${this.name} разговаривает с ${obj.name}`);
    } else {
      console.log(`${this.name} издает ${this.sound}`);
    }
  }
}

class Dog extends Animal {
  constructor(name, songs, breed) {
    super(name, songs);
    this.breed = breed;
  }

  fetch() {
    console.log(`Собака ${this.name} породы ${this.breed} принесла мяч.`);
  }
}

class Cat extends Animal {
  constructor(name, songs) {
    super(name, songs);
  }
}

const animal = new Animal("Животное");
const dog = new Dog("Бобик", "гав", "Дворняжка");
const cat = new Cat("Белиберда", "Мяу");

animal.speak();
dog.speak();
dog.fetch();
//***
cat.speak();
cat.speak(dog);
dog.speak(cat);

/* Задание 3.
Создайте класс Product, который будет представлять товар в магазине. У товара должны быть следующие свойства:
name (строка) - имя товара.
price (число) - цена товара за одну единицу.

Создайте класс ShoppingCart, представляющий корзину интернет-магазина. Конструктор класса ShoppingCart должен принимать два параметра:

customerName (строка) - имя покупателя.
initialTotalCost (число) - начальная общая стоимость заказа (может быть равна 0, если корзина пуста).
У класса ShoppingCart должен быть метод addItem(product, quantity), который позволяет добавить товар в корзину. Метод должен принимать два параметра:
product (объект класса Product) - товар, который добавляется в корзину.
quantity (число, по умолчанию 1) - количество единиц товара, которое нужно добавить в корзину. Если quantity не указано, считается, что добавляется одна единица товара.
У класса ShoppingCart должен быть метод getCurrentTotalCost(), который возвращает текущую общую стоимость заказа.

У класса ShoppingCart должен быть метод checkout(), который оформляет заказ и выводит сообщение с общей стоимостью заказа и благодарностью за покупку. Формат вывода сообщения: "Заказ оформлен для {имя покупателя}. Общая стоимость заказа: {общая стоимость} рублей. Спасибо за покупку!".*/

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor(customerName, initialTotalCost = 0) {
    this.customerName = customerName;
    this.totalCost = initialTotalCost;
    this.items = [];
  }

  addItem(product, quantity = 1) {
    this.items.push({ product, quantity });
    this.totalCost += product.price * quantity;
  }

  getCurrentTotalCost() {
    return this.totalCost;
  }

  checkout() {
    console.log(
      `Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.totalCost} рублей. Спасибо за покупку!`
    );
  }
}

const product1 = new Product("Колонка", 2500);
const product2 = new Product("Флешка", 1300);
const product3 = new Product("Ноутбук", 73000);
const product4 = new Product("Смартфон", 111300);
const product5 = new Product("Телевизор", 95300);
const cart = new ShoppingCart("Иванова");
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3);
cart.addItem(product4, 9);
cart.addItem(product5, 3);
cart.checkout();

// 2й вариант
// Создайте класс Product, который будет представлять товар в магазине. У товара должны быть следующие свойства:

class Product {
  // name (строка) - имя товара.
  // price (число) - цена товара за одну единицу.
  constructor(name, price = 0) {
    this.name = name;
    this.price = price;
  }
}

// Создайте класс ShoppingCart, представляющий корзину интернет-магазина.

class ShoppingCart {
  // Конструктор класса ShoppingCart должен принимать два параметра:
  // customerName (строка) - имя покупателя.
  // initialTotalCost (число) - начальная общая стоимость заказа (может быть равна 0, если корзина пуста).

  constructor(customerName, initialTotalCost = 0) {
    this.customerName = customerName;
    this.initialTotalCost = initialTotalCost;
    this.products = [];
  }

  // У класса ShoppingCart должен быть метод addItem(product, quantity), который позволяет добавить товар в корзину.
  // Метод должен принимать два параметра:
  // product (объект класса Product) - товар, который добавляется в корзину.
  // quantity (число, по умолчанию 1) - количество единиц товара, которое нужно добавить в корзину.
  // Если quantity не указано, считается, что добавляется одна единица товара.
  addItem(product, quantity = 1) {
    this.products.push(product);
    this.initialTotalCost += product.price * quantity;
  }

  removeItem(product, quantity = 1) {
    for (let i = 0; i < this.products.length; i++) {}
  }

  // У класса ShoppingCart должен быть метод getCurrentTotalCost(), который возвращает текущую общую стоимость заказа.
  getCurrentTotalCost = () => this.initialTotalCost;

  // У класса ShoppingCart должен быть метод checkout(), который оформляет заказ и выводит сообщение с общей
  // стоимостью заказа и благодарностью за покупку. Формат вывода сообщения: "Заказ оформлен для {имя покупателя}.
  // Общая стоимость заказа: {общая стоимость} рублей. Спасибо за покупку!".
  checkout() {
    console.log(
      `Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.initialTotalCost} рублей. Спасибо за покупку!`
    );
  }
}

const product1 = new Product("Ноутбук", 50000);
const product2 = new Product("Смартфон", 20000);

const shoppingCart = new ShoppingCart("Иван Иванов", 0);
shoppingCart.addItem(product1);
shoppingCart.addItem(product2, 2);
console.log(shoppingCart.getCurrentTotalCost());
shoppingCart.removeItem(product2, 3);
console.log(shoppingCart.getCurrentTotalCost());
shoppingCart.checkout();
const index = this.products.findIndex(
  (p) => p.name === product.name && p.price === product.price
);

if (index !== -1) {
  const temp =
    this.products.filter((el) => el === product).length < quantity - 1;

  if (temp < quantity) {
    this.initialTotalCost -= product.price * quantity;
    this.products.splice(index, quantity);
  }
}
