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


const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);