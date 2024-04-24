// Метод stringify позволяет преобразовать JavaScript объект в строковое представление в JSON формате. Этот очень полезный метод применяется перед отправкой данных на сервер. Также этот метод позволяет сохранить данные в виде объекта из JavaScript в текстовый файл, например логи работы программы.

// Объект -> JSON.
const student = {
  name: "Slava",
  surname: "Belkin",
  age: 20,
  practice: {
    place: "IKTG",
    hours: 47,
  },
};
console.log(JSON.stringify(student, null, 4));
// Вывод в консоль. Обратите внимание, что все ключи стали обернуты в кавычки.
// {
// "name": "Slava",
// "surname": "Belkin",
// "age": 20,
// "practice": {
//   "place": "IKTG",
//   "hours": 47
// }
// }
