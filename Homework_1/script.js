// Урок 1. Функциональный Javascript
// Домашнее задание

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки.

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter(value) {
  let count = value;

  const increment = () => {
    count++;
  };

  const decrement = () => {
    count--;
  };

  const get = () => {
    return count;
  };

  return { increment, decrement, get };
}

const { increment, decrement, get } = createCounter(5);
console.log(get());
increment();
increment();
console.log(get());
decrement();
console.log(get());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

let findElement = [];
function findElementByClass(rootEl, classEl) {
  if (rootEl.hasChildNodes()) {
    for (let element of rootEl.children) {
      if (element.className === classEl) {
        findElement.push(element);
        if (findElement[0].className !== classEl) {
          findElement = [];
          findElement.push(element);
        }
      }
      findElementByClass(element, classEl);
    }
  }
  return findElement[0];
}

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "chield6");
console.log(targetElement);

console.log("");

const rootElement_1 = document.getElementById("root1");
const targetElement_1 = findElementByClass(rootElement_1, "class5");
console.log(targetElement_1);
