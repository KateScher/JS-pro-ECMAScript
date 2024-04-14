// Что если мы хотим создать новый робот-пылесос (новый объект), но нам понадобятся те же методы, что у старого объекта? Позаимствуем их.

// Объект Roomba - робот-пылесос. Код самого объекта см. в листинге 1.
// Объект робот-пылесос модель Tango.
const Tango = {
  // По негласному правилу называем объекты в алгоритмах с большой буквы.
  model: "Tango-1",
  power: 300,
  batterySize: 3200,
  boxsize: 0.7,
  workTime: 60,
  counterOfStarts: 0,
  isFull: false,
  isObstacle: false,
  isUVLampOn: false,

  // После свойств объявляют его методы. А т.к. методы у новой модели такие же как и у старой, позаимствуем их у объекта Roomba.
  startCleaning: Roomba.startCleaning,
  goCharge: Roomba.goCharge,
  switchUVLamp: Roomba.switchUVLamp,
};

/////

// Обращение к свойствам объекта Tango.
console.log(Tango.model); // "Tango-1"
console.log(Tango.isFull); // false

// Вызов методов объекта. (Запускаем пылесос)
Tango.startCleaning(); // 'I am cleaning... I have been started: 1 times.'

// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать результат работы метода switchUVLamp.
Tango.isUVLampOn = true;

// Результат вызова следущего метода зависит от значения, хранящегося в свойстве объекта, а также от ттго как жтот метод был вызван (об этом поговорим чуть ниже).
Tango.switchUVLamp(); // 'UV lamp is not working.' - Выключили лампу

Tango.goCharge(); // 'I am going to charge...' - Отправили на зарядку пылесос

/////

const Samba = {
  model: "Samba-1",
  power: 250,
  batterySize: 2500,
  boxsize: 0.5,
  workTime: 50,
  counterOfStarts: 0,
  isFull: false,
  isObstacle: false,
  isUVLampOn: false,
  // На этот раз мы не будем создавать методы в объекте, мы постараемся их заимствовать непосредственно перед использованием.
};

/////

// Обращение к свойствам объекта Samba.
console.log(Samba.model); // "Samba-1"
console.log(Samba.isFull); // false
// Одолжим методы из объекта Roomba.
Samba.startCleaning = Roomba.startCleaning;
Samba.switchUVLamp = Roomba.switchUVLamp;
Samba.goCharge = Roomba.goCharge;

// Вызов методов объекта.
Samba.startCleaning(); // 'I am cleaning... I have been started: 1 times.'

// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать результат работы метода switchUVLamp.
Samba.isUVLampOn = true;

// Результат вызова следующего метода зависит от значения, хранящегося в свойстве объекта, а также от того как этот метод был вызван (об этом чуть ниже).
Samba.switchUVLamp(); // 'UV lamp is not working.'

Samba.goCharge(); // 'I am going to charge...'
