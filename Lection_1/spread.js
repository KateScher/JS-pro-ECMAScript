// Имеется 2 массива с объектами:

const studentsGroup1PracticeTime = [
  {
    firstName: "Ivanov",
    practiceTime: 56,
  },
  {
    firstName: "Petrov",
    practiceTime: 120,
  },
  {
    firstName: "Sidorov",
    practiceTime: 148,
  },
  {
    firstName: "Belkin",
    practiceTime: 20,
  },
  {
    firstName: "Avdeev",
    practiceTime: 160,
  },
];

const studentsGroup2PracticeTime = [
  {
    firstName: "Markov",
    practiceTime: 87,
  },
  {
    firstName: "Kostin",
    practiceTime: 133,
  },
  {
    firstName: "Kotlyarov",
    practiceTime: 140,
  },
  {
    firstName: "Peskov",
    practiceTime: 10,
  },
];

// Напишем не очень удобную, но показательную функцию, которая умеет принимать неограниченное число аргументов, и находить массимум среди них. Функция должна вызываться подобным образом: const maximum = findMAx(4, 7, 10);
function findMax() {
  const values = arguments; // arguments - переменная доступная внутри каждой функции, которая содержит в себе аргументы, переданные в функцию. Является псевдомассивом.
  let maxValue = -Infinity; // изначально пусть будет мин.число, а потом мы его перезапишем
  // Так как arguments является псевдомассивом, мы не можем применять к нему новые методы массивов такие как forEach или reduce, поэтому будем итерировать по старинке.
  for (let index = 0; index < values.length; index++) {
    if (values[index] > maxValue) maxValue = values[index];
  }
  return maxValue;
}
// Мы должны передавать в нашу функцию только числа, а в наших массивах содержаться объекты, поэтому сначала создадим массивы только со значениями времени отработанными студентами.
const group1PracticeTime = studentsGroup1PracticeTime.map(
  (student) => student.practiceTime
);
console.log(group1PracticeTime);
const group2PracticeTime = studentsGroup2PracticeTime.map(
  (student) => student.practiceTime
);
console.log(group2PracticeTime);
// Теперь можем вызывать нашу функцию поиска макс.значения. Она принимает множество числовых аргументов, а у нас есть только массив, вот тут нам и поможет оператор spread.

const maxTimeFromGroup1 = findMax(...group1PracticeTime); // ...group1PracticeTime - вытянет из массива все элементы и передаст их в функцию как отдельные переменные.
// Это аналогично страшной и неудобной записи:
// findMax(group1PracticeTime[0], group1PracticeTime[1], group1PracticeTime[2], group1PracticeTime[3], group1PracticeTime[4])

console.log(maxTimeFromGroup1); // 160

const maxTimeFromGroup2 = findMax(...group2PracticeTime);
console.log(maxTimeFromGroup2); // 140

// Давайте также найдем максимально отработанное время среди двух групп. Мы можем сделать это, передав данные обоих массивов в функцию таким образом:
// findMax(...group1PracticeTime, ...group2PractiveTime);
// А можем объединить 2 массива в один - это очень частая операция и оператов расширения (spread) очень в этом помогает.

const bothGroupsTime = [...group1PracticeTime, ...group2PracticeTime];
// Для объединения двух массивов нам нужно вытащить их элементы в один общий массив, поэтому мы объявляем новый массив, а в качестве его элементов делаем расширение элементов 1-го и 2-го массива. Также мы могли бы добавить в него и другие элементы.

const maxTimeBothGroups = findMax(...bothGroupsTime);
console.log(maxTimeBothGroups); // 160
