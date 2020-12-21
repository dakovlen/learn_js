
// let rundomNumber = function getRandomInt() {
//     return Math.floor(Math.random() * (10 - 1)) + 1;
// }

// console.log(rundomNumber());

// let clackBtn = document.getElementById('buttonAdd').onclick = function() {
//     var val = document.getElementById('answer').value;
//     document.getElementById('valueString').innerHTML=val;
// };


// if (rundomNumber === clackBtn) {
//     console.log('Победа')
// } else {
//     console.log('Проигрыш')
// }

var prNum, tempOut, attempts = 3;
prNum = Math.round(Math.random() * 10);

function guessNum() {
     var num, out;

     num = document.getElementById('mynum').value;
     out = document.getElementById('out');

     if(attempts == 0) {
          out.innerHTML = 'Вы исчерпали все попытки'
          return;
     }

     attempts--;

     if (num == prNum) {
         out.innerHTML = 'вы угадали! '
     } else if (num > 10 || num < 0) {
         out.innerHTML = 'Введите число от 0 до 10. Осталось попыток:' + attempts
     } else if (num > prNum) {
         out.innerHTML = 'Вы ввели число больше! Осталось попыток:' + attempts
     } else if (num < prNum) {
         out.innerHTML = 'Вы ввели число меньше!Осталось попыток:' + attempts
     }

}