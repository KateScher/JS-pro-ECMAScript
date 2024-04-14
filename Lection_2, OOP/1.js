// Объект робот-пылесос.
const Roomba = {
  // Есть негласное правило называть объекты в алгоритмах с большой буквы
  // Обычно сначала объявляют свойства объекта.
  model: "Roomba-1",
  power: 200,
  batterySize: 2100,
  boxsize: 0.5,
  workTime: 45,
  counterOfStarts: 0,
  isFull: false,
  isObstacle: false,
  isUVLampOn: false,

  // После свойств объявляют его методы.
  startCleaning: function () {
    this.counterOfStarts++;
    console.log(
      "I am cleaning... I gave been started: ",
      this.counterOfStarts,
      "times."
    );
  },
  goCharge: function () {
    console.log("I am going to charge...");
  },
  switchUVLamp: function () {
    // стандартная проверка - если лампа включена, то выключить и наоборот.
    this.isUVLampOn = !this.isUVLampOn;
    console.log(`UV lamp is ${this.isUVLampOn ? "working" : "not working"}.`);
  },
};
