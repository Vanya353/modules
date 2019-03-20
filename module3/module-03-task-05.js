/*  
  Напиши фукнцию findLongestWord(str), которая принимает 
  параметром произвольную строку и возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/


function findLongestWord(str){
  let strSplit = str.split(' ');
  let longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[longestWord].length < strSplit[i].length){
    longestWord = i;
    }
  }return strSplit[longestWord];
}
// Вызовы функции для проверки
console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog")
); // 'jumped'

console.log(
  findLongestWord("Google do a roll")
); // 'Google'

console.log(
  findLongestWord("May the force be with you")
); // 'force'
