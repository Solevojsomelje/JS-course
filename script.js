"use strict";
// const personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   gender: [],
//   privat: false,
//   start: function () {
//     personalMovieDB.count = +prompt("Сколько фильвом вы посмотрели?", "");
//     while (
//       personalMovieDB.count == "" ||
//       personalMovieDB.count == null ||
//       isNaN(personalMovieDB.count)
//     ) {
//       personalMovieDB.count = +prompt("Сколько фильвом вы посмотрели?", "");
//     }
//   },
//   rememberMyFilms: function () {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
//         b = prompt("На сколько оцените его?", "");
//       if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//       } else {
//         console.log("error");
//         i--;
//       }
//     }
//   },
//   detectPersonalLevel: function () {
//     if (personalMovieDB.count < 10) {
//       console.log("просмотрено мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//       console.log("Вы киноман");
//     } else {
//       console.log("Произошла ошибка");
//     }
//   },
//   showMyDB: function (hidden) {
//     if (!hidden) {
//       console.log(personalMovieDB);
//     }
//   },
//   toggleVisibleMyDB: function () {
//     if (personalMovieDB.privat) {
//       personalMovieDB.privat = false;
//     } else {
//       personalMovieDB.privat = true;
//     }
//   },
//   writeYourGenres: function () {
//     for (let i = 1; i <= 3; i++) {
//       let genre = prompt(`Ваш любимый жанр под номером ${i}`);
//       if (genre === "" || genre == null) {
//         console.log("Вы ввели некорректные данные или не ввели их вовсе");
//         i--;
//       } else {
//         personalMovieDB.gender[i - 1] = genre;
//       }
//     }
//     personalMovieDB.gender.forEach((item, i) => {
//       console.log(`Любимый жанр ${i + 1} - это ${item}`);
//     });
//   },
// };

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
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a,b) {
//   return a-b
// }

// arr.forEach(function(item,i,arr){
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join(";"));

// function copy(mainObj) {
//   let objCopy = {}; // objCopy будет хранить копию mainObj
//   let key;

//   for (key in mainObj) {
//     objCopy[key] = mainObj[key]; // копирует каждое свойство objCopy
//   }
//   return objCopy;
// }

const mainObj = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};
const newNumbers = copy(mainObj);
newNumbers.a = 10;
console.log(newNumbers);
console.log(mainObj);

const add = {
  d: 17,
  e: 20,
};
console.log(Object.assign(mainObj, add)); //1-й аргумент в который хотим поместить, 2-й тот объект, который помещаем

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function () {
//     console.log("hello");
//   },
// };
// const john = Object.create(soldier);
// john.sayHello();

// //Object.setPrototypeOf(john,soldier); тоже что и ниже, только правильно
// //john.__proto__ = soldier; //устаревшее
// console.log(john.armor);
