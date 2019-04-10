﻿/*
  Создайте скрипт кассира, который получает список продуктов и деньги, 
  подсчитывает общую стоимость продуктов, и в зависимости от того хватает 
  денег или нет, уведомляет покупателя о результате.
*/

/* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */ 


/* 
  Необходимо создать функцию-конструктор Cashier.
  
  Поля будущего объекта кассира (🔔 объявляются как this.имя_поля в конструкторе): 
    - name - строка, имя кассира, передается при вызове конструктора
    
    - productDatabase - объект база данных продуктов, передается при вызове конструктора
    
    - customerMoney - число, сумма введенная пользователем при запросе денег, всегда начинается с 0 
    
    - getCustomerMoney(value) - метод, получает число, деньги покупателя, и записывает его в поле customerMoney.
    
    - countTotalPrice(order) - метод, получает объект списока покупок, считает общую стоимость покупок.
      🔔 Ключи объекта order есть в объекте productDatabase. Из order берем количество единиц продукта,
         а из productDatbase цену за одну штуку и умножаем, так получаем цену одного типа продукта в заказе.
         Чтобы посчитать цену для всех продуктов заказа используйте цикл, перебрав все ключи order.
     
    - countChange(totalPrice) - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
        * Обязательно проверьте что customerMoney не меньше чем значение totalPrice
        * Если денег было передано достаточно, возвращает разницу денег.
        * Если в customerMoney меньше денег чем в totalPrice, возвращает null 
        
    - onSuccess(change) - метод, выводит в консоль строку `Спасибо за покупку, ваша сдача ${change}!`.
    
    - onError() - метод, выводит в консоль строку 'Очень жаль, вам не хватает денег на покупки'   
    
    - reset() - метод, сбрасывает поле customerMoney 0.
*/
const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};
function Cashier(name, productDatabase) {
  this.name = name;
  this.productDatabase = productDatabase;
  this.customerMoney = 0; //гроші в наявності
  this.money = 0; //потрачені гроші
  
  this.getCustomerMoney = function(value){
    this.customerMoney += value;
  }
  this.countTotalPrice = function(order){
    for(let key in order){
      this.money += order[key] * products[key]
    }return this.money
  }
  this.countChange = function(totalPrice){
    totalPrice = this.customerMoney - this.money;
    if(this.customerMoney < totalPrice){
      return false;
    }return totalPrice;
  }
  this.onSuccess = function(change){
    return `Спасибо за покупку, ваша сдача ${change}!`;
  }
  this.onError = function(){
    return 'Очень жаль, вам не хватает денег на покупки';
  }
  this.reset = function(){
    this.customerMoney = 0;
  }
}

/* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

/* Пример использования */
const mango = new Cashier('Mango', products);

// Проверяем исходные значения полей
console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
const totalPrice = mango.countTotalPrice(order);

// Проверям что посчитали
console.log(totalPrice); // 110

// Вызываем getCustomerMoney для запроса денег покупателя
console.log(mango.getCustomerMoney(300));

// Проверяем что в поле с деньгами пользователя
console.log(mango.customerMoney); // 300

// Вызываем countChange для подсчета сдачи
const change = mango.countChange();

// Проверяем что нам вернул countChange
console.log(change); // 190

// Проверяем результат подсчета денег
if(change !== null) {
   // При успешном обслуживании вызываем метод onSuccess
  console.log(mango.onSuccess(change)); // Спасибо за покупку, ваша сдача 190
} else {
  // При неудачном обслуживании вызываем метод onError   
  console.log(mango.onError()); // Очень жаль, вам не хватает денег на покупки
}

// Вызываем reset при любом исходе обслуживания
mango.reset();

// Проверяем значения после reset
console.log(mango.customerMoney); // 0