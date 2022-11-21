"use strict";
let numbersOfFilms = +prompt("Сколько фильмов уже просмотрели?", "");
console.log(numbersOfFilms);
const personalMovieDB = {
  count: numbersOfFilms,
  movies: {},
  actors: {},
  genders: [],
  privat: false,
};
let a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = prompt("На сколько оцените его?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
