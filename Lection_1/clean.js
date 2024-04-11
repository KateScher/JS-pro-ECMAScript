// Чистые функции

const student = {
  firstName: "Ivan",
  age: 21,
};
// Функция вычисления года рождения. Принимает текущий год, и вычисляет год рождения студента, используя глобальные данные. Эта функция с побочными эффектами. Она сильно зависит от глобальной переменной student.
const getYearOfBirth = (currentYear) => {
  return currentYear - student.age;
};
console.log(getYearOfBirth(2022)); // 2001
student.age = 25;
console.log(getYearOfBirth(2021)); // 1996 - Мы вызывали ф-ю дважды с одним и тем же параметром, но получили разный результат. Это значит, что мы не можем знать, что вернет ф-я в тот или иной момент работы программы, и мы не можем гарантировать, что код будет выполнять верно.
// Чистая версия функции. Берет данные только из своих  аргументов.
const getYearOfBirthPureVersion = (age, currentYear) => {
  return age - currentYear;
};
// Более сложный пример с мутацией (побочными эффектами), но более частый случай на практике.
// Функция добавления нового ключа в объект. Принимает исходный объект, имя ключа и значение, которое надо добавить.
const addField = (object, key, value) => {
  object[key] = value;
  return object;
};
const updatedStudent = addField(student, "lastname", "Belkin");
console.log(student); // {firstName: "Ivan", age: 25, lastName: "Belkin"} - вызвав нашу функцию добавления поля, мы изменили начальный объект, что может привести к нежелательным последствиям в остальном коде, которые порой очень сложно обнаружить. Например, дальше по коду может идти итерация объекта student и вывод только начальных полей, но мы добавили в него третье поле, которое тоже будет проитерировано.
console.log(updatedStudent); // {firstName: "Ivan", age: 25, lastName: "Belkin"}
// Чистый вариант функции - нам нужно создать новый объект внутри функции для изменения и возврата.
const addFieldPureVersion = (object, key, value) => {
  return {
    // возвращает новый объект.
    ...object, // воспользуемся оператором spread для получения копии свойств исходного объекта
    [key]: value, // добавим новое свойство
  };
};
const updatedStudentPure = addFieldPureVersion(student, "practiceTime", 148);
console.log(student); // {firstName: "Ivan", age: 25, lastName: "Belkin"} - на этот раз исходный объект не был изменен.
console.log(updatedStudentPure); // {firstName: "Ivan", age: 25, lastName: "Belkin", practiceTime: 148}
