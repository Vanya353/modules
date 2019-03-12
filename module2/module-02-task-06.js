/*
  Напиши скрипт, который проверяет произвольную строку 
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/



const message = "May the force be with you"
var strSplit = message.split(' ');//преобразование в массив
var longestWord = 0;//предпологается что первый элемента списка и есть самое длинное слово,имеет индекс 0
  //Остальные слова перебираются в цикле
  for(var i = 0; i < strSplit.length; i++){
    //Если длина слова под индексом idLongestWord больше,чем длина слова под текущим индексом
    if(strSplit[longestWord].length < strSplit[i].length){
  //то следует записать индекс текущего слова в переменную LongestWord
    longestWord = i;
    }
  }
  //извлечение из списка listWords слова с индексом idLongestWord и его вывод на экран
console.log(strSplit[longestWord])