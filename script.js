"use strict";

//1. Необходимо просуммировать все числа и найти среднее
// арифметическое. На экран необходимо вывести сумму и среднее арифметическое
const array = [2, 18, 33, 40, 1, 0, -3, 10];
let sumArray = 0;
for (let i = 0; i < array.length; i++) {
  sumArray += array[i];
}
alert(
  "Сумма равна = " +
    sumArray +
    "; среднее арифметическое = " +
    sumArray / array.length +
    "."
);

//2. Необходимо вывести сумму всех чисел (то есть если элемент типа number).
// Примечание: преобразование значений к числу делать не нужно! Ожидаемый
// результат сложения должен быть: 26
const arr = [2, "olol", 3, 10, true, null, 11, "100"];
let sumArr = 0;
for (let j = 0; j < arr.length; j++) {
  if (typeof arr[j] == "number") {
    console.log(arr[j]);
    sumArr += arr[j];
    console.log(sumArr);
  }
  // console.log(arr[i])
  // console.log(typeof arr[i])
}
alert("Сумма = " + sumArr);

//3. Cгенерируйте массив из 10 случайных чисел с двумя знаками после запятой.
// Выведите его в консоль. Далее переберите массив и распечатайте в консоли
// значения его элементов, возведенные в пятую степень.

let randomArr = [];

for (let i = 0; i < 10; i++) {
  randomArr[i] = +Math.random().toFixed(2);
}
alert("Массив: " + randomArr + " ");

for (let i = 0; i < 10; i++) {
  randomArr[i] **= 5;
}
alert("Массив в 5 степени: " + randomArr);

// 4, Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу
// умножения (от 1 до 10 включительно). Подсказка: необходимо использовать цикл
// в цикле. Также обратите внимание что структура должна быть вида - массив массивов
// ( [ [] , [] ] ).

let table = new Array(10); // В таблице 10 строк
for (let k = 0; k < table.length; k++) {
  table[k] = new Array(10);
}
for (let row = 0; row < table.length; row++) {
  for (let col = 0; col < table[row].length; col++) {
    table[row][col] = row + " * " + col + " = " + row * col;
  }
}

console.log(table);

// 5. Запросить у пользователя имя, фамилию и должность. Записать эти
// значения в объект. Сформировать строку вида “Привет, {name} {surname}.
// Как долго ты работаешь {jobPosition}” ? Примечание: для формирование этой
// строки, вам нужно обращаться к ключам объекта! Это важно для данного задания

let user = {
  yourName: prompt("Введите имя"),
  yourSurname: prompt("Введите фамилию"),
  jobPosition: prompt("Введите должность"),
};

alert(
  "Привет, " +
    user.yourName +
    " " +
    user.yourSurname +
    ". Как долго ты работаешь " +
    user.jobPosition +
    "?"
);


// 6. Напишите функцию isEmpty(obj), которая возвращает true, если 
// у объекта нет свойств, иначе false



function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

let emptyObject = {}
let fullObject = {
    weight: 20,
    height: 40
}

console.log(isEmpty(emptyObject))
console.log(isEmpty(fullObject))