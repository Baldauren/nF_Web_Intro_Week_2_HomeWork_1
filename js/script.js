// ! Task #1 ---------------------------------------------
// Создайте объект user. Узнайте у user-a его имя, возраст, является ли он мужчиной или
// женщиной. Запишите все в объект. И выведите в консоли.

let name = prompt("What is your name?"),
  age = prompt("How old are you?"),
  gender = prompt("gender:");

let user = { name, age, gender };

console.log(user);

// ! Task #2 ---------------------------------------------
//  Используя конструкцию if..else, напишите код, который получает число через prompt,
//  а затем выводит в alert.

let number = prompt("Enter only a positive number:");

if (number >= 0) {
  console.log("Yes! You did it correctly");
} else {
  console.log("Nope! I said to enter a positive number.");
}

// ! Task #3 ---------------------------------------------
// Перепишите этот блок кода с использованием оператора `switch`.
let a = +prompt("a?", "");
console.log(a); // string
a = +a;
console.log(a); // number

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2 || 3:
    alert("2,3");
    break;
}

//  Работа с циклами(loops).
// ! Task #4 ---------------------------------------------
// 1. Посчитайте сумму всех четных чисел в промежутке 1-100. Выведите в консоль.
let count = 0;
for (let i = 2; i <= 100; i += 2) {
  count += i;
}
console.log(count);

// ! Task #5 ---------------------------------------------
// 2.  Перепишите цикл `for` на `while`.
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}
