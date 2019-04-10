/*  
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки
function countProps(obj){
  counter = 0;
  for(let keys in obj){
    counter++;
  }return counter;
}
console.log(
  countProps({})
); // 0

console.log(
  countProps({a: 1, b: 3, c: 'hello'})
); // 3