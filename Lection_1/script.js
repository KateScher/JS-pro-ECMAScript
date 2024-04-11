// Нахождение максимального числа
// Нахождение макс. числа просто в данной функции, но если будет массив
// и не с двумя, а более значений?

// function max(param1, param2) {
//   if (param1 > param2) {
//     return param1;
//   } else if (param1 < param2) {
//     return param2;
//   } else {
//     return "Числа равны";
//   }
// }

// console.log(max(2, 3));

// С помощью оператора spread найдем макс.число всего в 2 строки:

// const arr = [10, 5, 15, 7];
// console.log(Math.max(...arr));

// Используем оператор rest при больших массивах:
const arr1 = [1, 3, 5, 7, 10];

// находим max число только в двух первых параметрах, остальные выводятся в массив
function max(param1, param2, ...rest) {
  if (param1 > param2) {
    console.log(param1);
  } else {
    console.log(param2);
  }
  console.log(rest);
}

console.log(max(...arr1));
