// Задание 1
// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]);
// Ожидаемый результат: [1, 2, 3, 4, 5, 6]

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const mergeArrays = (arr1, arr2) => {
//   return [...arr1, ...arr2];
// };

// console.log(mergeArrays(arr1, arr2));

//------ Более короткий вариант:----------

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

// console.log(mergeArrays(arr1, arr2));

// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5);
// Ожидаемый результат: [1, 2, 3, 4, 5]

// либо функция стрелочная const removeDuplicates = (...args) => {}
// function removeDuplicates(...args) {
//   let uniqueArray = [];
//   // Собираем все аргументы в массив
//   for (let i = 0; i < args.length; i++) {
//     // Проверяем, если элемент уже есть в уникальном массиве
//     // -1 значит что элемента нет в массиве, он уникален
//     if (uniqueArray.indexOf(args[i]) === -1) {
//       uniqueArray.push(args[i]);
//     }
//   }
//   return uniqueArray;
// }
// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

//-------------------------

// Задание 2 (Чистые функции 25минут)
// Текст задания
// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа. (решается либо через if, либо reduce)
const data = [1, 2, 3, 4, 5, 6, 33, 46, 53, 98];
function getEvenNumbers(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element % 2 === 0) {
      result.push(element);
    }
  }
  return result;
}

console.log(getEvenNumbers(data));

// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

const arrNum = [1, 4, 5, 11, 15, 24];

const average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average(arrNum));

// 2й вариант через for:

const numArray = [2, 6, 5, 9, 3, 10];
function calculateAverage(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    result += element;
  }
  return result / array.length;
}

console.log(calculateAverage(numArray));

// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

const capitalizeFirstLetter = (String) => {
  return String.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
console.log(
  capitalizeFirstLetter(
    "возвращает новую строку, в которой первая буква каждого слова является заглавной"
  )
);
// Задание 3 (Замыкания 20 минут)
// 1. Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

function createCalculator(initialValue) {
  let tempNumber = initialValue;
  console.log(tempNumber);
  return {
    add: (number) => (tempNumber += number),
    subtract: (number) => (tempNumber -= number),
    getNumber: () => tempNumber,
  };
}

let calculate = createCalculator(5);
calculate.add(5);
console.log(calculate.getNumber());
calculate.subtract(100);
console.log(calculate.getNumber()); // По сути получился калькулятор, который никак не "разрушить".

// Задание 4 (Лексический контекст 15 минут)
// 1. Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

function createGreeting(userName) {
  return function () {
    console.log(`Hello, ${userName}!`);
  };
}

const greeting = createGreeting("John");
greeting(); // 'Hello, John!

// Задание 5 (тайминг 15 минут)
// 1. Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

const createPasswordChecker = (validLength) => {
  return (password) => {
    return password.length === validLength;
  };
};

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid("password")); // Ожидаемый результат: false
console.log(isPasswordValid("secret")); // Ожидаемый результат: true

// Задание 6 (Рекурсия 25 минут)
// 1. Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)

function sumDigits(number) {
  if (number < 10) {
    return number;
  } else {
    return (number % 10) + sumDigits(Math.floor(number / 10));
  }
}

console.log(sumDigits(123));
console.log(sumDigits(456789));

console.log(` `);
