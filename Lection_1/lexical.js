const houses = [];

let i = 0;
while (i < 10) {
  let house = function () {
    // Функция "дом"
    console.log(i); // выводит номер дома
  };
  houses.push(house);
  i++;
}

houses[0](); // 10 - у нулевого дома номер 10 почему?
houses[7](); // 10 - и у семьмого дома номер 10 почему?

//

let house = function () {
  // Функция "дом"
  // лексическое окружение: { i: 10 }
  console.log(i);
};

///////
