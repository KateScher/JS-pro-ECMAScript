// Стрелочные функции

const Roomba = {
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
  startCleaning: () => {
    this.counterOfStarts++;
    console.log(
      "I am cleaning... I gave been started: ",
      this.counterOfStarts,
      "times."
    );
  },
  goCharge: () => {
    console.log("I am going to charge...");
  },
  switchUVLamp: () => {
    // стандартная проверка - если лампа включена, то выключить и наоборот.
    this.isUVLampOn = !this.isUVLampOn;
    console.log(`UV lamp is ${this.isUVLampOn ? "working" : "not working"}.`);
  },
};

///////

// Объект Roomba - робот-пылесос. Код самого объекта см. в листинге 1, с использованием синтаксиса ES2015.

// Вызов методов объекта.
Roomba.startCleaning(); // I am cleaning... I have started: NaN times.
Roomba.startCleaning.call(Roomba); // I am cleaning... I have started: NaN times.
Roomba.startCleaning.apply(Roomba); // I am cleaning... I have started: NaN times.
const bindedMethod = Roomba.startCleaning.bind(Roomba);
bindedMethod(); // I am cleaning... I have started: NaN times.

setTimeout(Roomba.startCleaning.bind(Roomba), 1000); // I am cleaning... I have started: NaN times.   ПОЧЕМУ NaN???

//////
// Далее - что мы можем использовать для решения проблемы:
const Stand = {
  model: "Stand-1",
  robots: ["Roomba-1", "Tango-1", "Samba-1", "Roomba-2"],
  // Метод, с использованием стрелочной функции в качестве функции обратного вызова.
  startTestingArrow: function () {
    console.log("Start testing...");
    this.robots.forEach((value) => {
      console.log("stand: ", this.model, "is testing robot: ", value);
    });
  },
  // Метод с исопльзованием классической функции в качестве функции обратного вызова.
  startTestingClassic: function () {
    console.log("Start testing...");
    this.robots.forEach(function (value) {
      console.log("stand: ", this.model, "is testing robot: ", value);
    });
  },
};
Stand.startTestingArrow();
// Start testing...
// stand: Stand-1 is testing robot: Roomba-1
// stand: Stand-1 is testing robot: Tango-1
// stand: Stand-1 is testing robot: Samba-1
// stand: Stand-1 is testing robot: Roomba-2
Stand.startTestingClassic();
// Start testing...
// stand: undefined is testing robot: Roomba-1
// stand: undefined is testing robot: Tango-1
// stand: undefined is testing robot: Samba-1
// stand: undefined is testing robot: Roomba-2
