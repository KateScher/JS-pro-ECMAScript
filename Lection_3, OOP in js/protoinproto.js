// Объявление базового родительского объекта смотри в листинге 1;
// Объявление DancingSeries смотри в листинге 2.
// Объект робот-пылесос.
const Samba = {
  // Обновляем свойства под конкретную модель.
  model: "Samba-1",
  power: 250,
  batterySize: 2500,
  workTime: 50,
  // Делаем ссылку на прототип от родителя.
  __proto__: DancingSeries,
};
console.log(Samba.startCleaning());
