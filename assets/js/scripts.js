// // "use strict";
// // /*let number = 5;
// // const leftBorderWidth = 1;

// // number = 10;

// // console.log(number);

// // var name = "Ivan";

// // {
// //   let result = 50;
// //   let newResult = result + 5;
// //   console.log(newResult);
// // }

// // const obj = {
// //   name: "John",
// //   age: 25,
// //   isMarried: false,
// // };

// // let arr = [
// //     'plum.png',
// //     'orange.png',
// //     'apple.svg',
// // ]

// // console.log(arr[1]);*/

// // const answers = [];

// // answers[0] = prompt('Как ваше имя?', '');
// // answers[1] = prompt('Как ваша фамилия?', '');
// // answers[2] = prompt('Сколько вам лет?', '');

// // console.log(typeof(answers));

// // let incr = 10,
// //     decr = 10;

// //     incr++;
// //     decr--;

// // console.log(incr);
// // console.log(decr);

// const isCheced = true,
//       isClose = false;

// console.log(isCheced || isClose);

// if (4==9) {
//   console.log('Ok!')
// } else {
//   console.log('Error')
// }

// const num = 50;

// if (num < 49) {
//   console.log('Error');
// } else if (num > 100) {
//   console.log('Много')
// } else {
//   console.log('Ok');
// }

// (num === 50) ? console.log('Ok') : console.log('Error');
 
const num = '50';

switch (num) {
  case '49':
    console.log('Error');
    break;
  case '100':
    console.log('Много');
    break;
  case '50':
    console.log('Ok');
    break;
  default:
    console.log('Не в этот раз');
    break;
}


const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for(let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

  if (a != null && b != null && a!= '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('Done')
  }else {
      console.log('Error')
      i--;
    }
}

if(personalMovieDB.count < 10) {
  console.log('Просмотрено достаточно мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
  console.log('Вы класический зритель');
} else if (personalMovieDB.count >=30) {
  console.log('Вы киноман!');
} else {
  console.log('Error');
}

console.log(personalMovieDB);