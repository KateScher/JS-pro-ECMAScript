// Замыкание (функции)

const createCounter = () => {
  let counter = 0;
  return () => {
    return ++counter;
  };
};

console.log(counter);

// Создаем счетчик.
const counter1 = createCounter();
counter1(); // 1
counter1(); // 2

// Создадим еще одни счетчик. Каждый будет работать независимо.
const counter2 = createCounter();
counter2(); // 1
counter1(); // 3

// Пример с передачей переменной
const closureFunction = () => {
  const cache = {};
  return (x) => {
    if (cache[x]) return cache[x];
    const result = x * x;
    cache[x] = result;
    return result;
  };
};

const cachePow = closureFunction();
cachePow(2); // 4
cachePow(8); // 64
cachePow(2); // 4
