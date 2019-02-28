/* 
  Время состоит из: 
    часов(hours)
    минут (minutes)
    секунд(seconds).
  
  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45
  
  Составляющие времени не гарантированно состоят из 2-х цифр!
  
  Напишите скрипт который проверяет каждую составляющую,
  тоесть значения переменных hours, minutes, seconds 
  и добавлят впереди 0 если необходимо.
*/

let hours = 7;
let minutes = 3;
let seconds = 42;
let hours2 = (hours<10) ? "0" + hours : hours;
let minutes2 = (minutes<10) ? "0" + minutes : minutes;
let seconds2 = (seconds<10) ? "0" + seconds : seconds;
const time = `${hours2}:${minutes2}:${seconds2}`;

console.log('Time is: ', time);