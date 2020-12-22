
let attempts = 3;
let programNumber = Math.round(Math.random() * 10);

let tempo = document.getElementById('tempo');
let result = document.getElementById('result');

function game() {
    let answer = document.getElementById('answer').value;

    if(attempts == 0) {
       result.innerHTML = 'Вы исчерпали все попытки :('
         return;
    }

    attempts--;

    if (answer == programNumber) {
       result.innerHTML = 'Вы угадали число загаданное компьютером!!!'

    } else if (answer > 10 || answer < 0) {
       result.innerHTML = 'Введите число от 0 до 10. Осталось попыток:' + attempts
    } else if (answer > programNumber) {
       result.innerHTML = 'Вы ввели число больше! Осталось попыток:' + attempts
    } else if (answer < programNumber) {
       result.innerHTML = 'Вы ввели число меньше! Осталось попыток:' + attempts
    }
}

btnAdd.addEventListener('click', (e) => {
    game();
});



// let programNumber = Math.floor((Math.random() * 10 ) + 1);

// let buttonAdd = document.getElementById('buttonAdd');

// buttonAdd.addEventListener('click', (e) => {
//      number = document.getElementById('answer').value;
//     result = document.getElementById('result');

//     if(number == programNumber){
//         result.innerHTML = "Вы угадали"
//     } else if (number > programNumber) {
//         result.innerHTML = "Вы ввели число больше"
//     }
//     else {
//         result.innerHTML = "Вы ввели число меньше"
//     }    
// });