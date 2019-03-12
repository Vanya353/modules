/*
* Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
* Гравировка одного слова стоит 10 кредитов.
*/

// В переменной message хранится произвольная строка
const message = "Proin sociis natoque et magnis parturient montes mus";
let price = 0;
const words = message.split(" ");
// Разбить строку в массив, разделитель - пробел, и записать в переменную words
console.log(words);

// Выведи в консоли длину массива words
console.log(words.length); // 8
/*
// Используя цикл вычисли сколько будет стоить гравировка и запиши результат в переменную price
console.log(price); // 80
*/
for (i=0;i < words.length;i++){
  price=words.length * 10;
}
console.log(price)
