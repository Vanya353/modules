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
alert (`Общая сумма чисел равна ${sumElem}`);