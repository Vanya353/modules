/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  
  - Заканчивает запрашивать числа, как только посетитель введёт не число 
    или нажмёт Cancel. При этом ноль 0 не должен заканчивать ввод, 
    это разрешённое число.
  
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/
const numbers = [];
let enterUser;
let sumElem = 0;

do { 
  enterUser = prompt ('Введите число');
  if (enterUser === null) break;
  numbers.push (+enterUser);
}
while ( true );

for (let i = 0; i < numbers.length; i++) 
  
{sumElem += numbers [i];
}
alert ("Cума дорівнює " + sumElem);