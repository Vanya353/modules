/*
* Напиши функцию getTotal(order), которая получает обьект заказа с продуктами и их ценой.
* Функция возвращает число - общую стоимость заказа.
* 
* Используй метод reduce.
*/
function getTotal(order){
  let sumProducts = Object.keys(order).reduce( function( sum, key ){
    return sum +  order[key];
               }, 0 );
  return sumProducts;
}
console.log(getTotal({ apples: 25, chicken: 60, milk: 15 })); // 100

console.log(getTotal({ bread: 10, apples: 25, milk: 15, cheese: 40 })); // 90

console.log(getTotal({ bread: 10, chicken: 60, cheese: 40 })); // 110
