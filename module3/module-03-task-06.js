/*  
  Напиши функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/
function findLargestNumber(numbers){
  let min = numbers[0];
  let max = min;
  for (i = 1; i < numbers.length; ++i) {
      if (numbers[i] > max) max = numbers[i];
      if (numbers[i] < min) min = numbers[i];
  }
  return max;
}
// Вызовы функции для проверки
console.log(
  findLargestNumber([1, 2, 3])
); // 3

console.log(
  findLargestNumber([27, 12, 18, 5])
); // 27

console.log(
  findLargestNumber([31, 128, 14, 74])
); // 128
