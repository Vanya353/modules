/*
  Напишите функию findGuestById(guests, id), принимающую 
  guests - массив объектов гостей, id - идентификатор (число). 
  
  Функция должна возвращать объект гостя с совпадающим id.
  
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

const guests = [
  { id: 1, name: 'Mango', age: 20 },
  { id: 2, name: 'Poly', age: 18 },
  { id: 3, name: 'Ajax', age: 30 },
  { id: 4, name: 'Chelsey', age: 45 }
];
function findGuestById(guests, id){
  const arrUsers = guests.find(user => user.id === id);
  return arrUsers;
}
// Вызовы функции для проверки
console.log(
  findGuestById(guests, 3)
); // {id: 3, name: 'Ajax', age: 30}

console.log(
  findGuestById(guests, 1)
); // {id: 1, name: 'Mango', age: 20}

console.log(
  findGuestById(guests, 5)
); // undefined
