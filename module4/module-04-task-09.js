/*  
  Напиши функцию-конструкор User для создания 
  пользователя со следующим свойствами:
    - name - строка (имя)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  будут переданы при вызове конструктора User.
  
  Добавь метод getInfo(), который, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`
*/
function User(arr){
  this.name = arr['name'];
  this.age = arr['age'];
  this.friends = arr['friends'];
  
  this.getInfo = function(){
    return (`User ${this.name} is ${this.age} years old and has ${this.friends} friends`); 
  }
}
const mango = new User({ name: "Mango", age: 2, friends: 20 });
console.log(mango.getInfo()); // User Mango is 2 years old and has 20 friends

const poly = new User({name: "Poly", age: 3, friends: 17 });
console.log(poly.getInfo()); // User Poly is 3 years old and has 17 friends