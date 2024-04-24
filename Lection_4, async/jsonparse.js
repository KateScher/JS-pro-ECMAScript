// Метод parse делает обратную процедуру, принимая строку в качестве аргумента,
// метод пытается распарсить её как строку формата JSON и превратить в объект
// JavaScript (или массив).
// JSON -> Объект.
console.log(JSON.parse('{"name": "Slava", "surname": "Belkin", "age": 20, practice: {"place": "IKGT", "hours": 47}}));
// {
// name: 'Slava',
// surname: 'Belkin',
// age: 20,
// practice: {
// place: 'IKTG',
// hours: 47,
// __proto__: Object
// },
// __proto__: Object
// }

console.log(JSON.parse('["Belkin", "Ivanov", "Petrov"]')); 
// ["Belkin", "Ivanov", "Petrov"]