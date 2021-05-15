"use strict";

// let numberOfFilms;
// numberOfFilms = prompt('How many movies have you watched so far?')
// // console.log(numberOfFilms);

// const personalMovieDB =  {
// count : numberOfFilms,
// movies :  {

// },
// actors : {
    
// },
// genres : [],
// privat : false
// };

// personalMovieDB.movies =[prompt('Last movie you watched?'] = prompt('Rate this movie');


const numberOfFilms = +prompt('How many movies have you watched so far?');

const personalMovieDB =  {
    count: numberOfFilms,
    movies:  {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Last movie you watched?', ''),
      b = prompt('Rate this movie', ''),
      c = prompt('Last movie you watched?', ''),
      d = prompt('Rate this movie', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);