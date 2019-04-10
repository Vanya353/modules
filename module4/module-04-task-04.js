/*  
  Напиши функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/


function isObjectEmpty(obj){
  for (let keys in obj){
    return false;
  }return true;
}
// Вызовы функции для проверки
console.log(
  isObjectEmpty({})
);
console.log(
  isObjectEmpty({a: 1})
); // false

console.log(
  isObjectEmpty({a: 1, b: 2})
); // false