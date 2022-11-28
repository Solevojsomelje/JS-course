"use strict";
// let numbersOfFilms;
// function start() {
//   numbersOfFilms = +prompt("Сколько фильвом вы посмотрели?", "");
//   while (
//     numbersOfFilms == "" ||
//     numbersOfFilms == null ||
//     isNaN(numbersOfFilms)
//   ) {
//     numbersOfFilms = +prompt("Сколько фильвом вы посмотрели?", "");
//   }
// }
// start();
// const personalMovieDB = {
//   count: numbersOfFilms,
//   movies: {},
//   actors: {},
//   gender: [],
//   privat: false,
// };

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
//       b = prompt("На сколько оцените его?", "");
//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log("done");
//     } else {
//       console.log("error");
//       i--;
//     }
//   }
// }
// rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log("просмотрено мало фильмов");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
//   } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
//   } else {
//     console.log("Произошла ошибка");
//   }
// }
// detectPersonalLevel();

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.gender[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//   }
// }
// writeYourGenres();

// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
//   makeTest:function(){
//     console.log("test");
//   }

// };

// const {border,bg} = options.colors;
// console.log(border);

// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);

//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }
// console.log(Object.keys(options).length)

// const arr =[1,2,3,4,5,6];
// arr.forEach(function(item,i,arr){
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join(";"));
