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


let numberOfFilms = +prompt('How many movies have you watched so far?', '');

const personalMovieDB =  {
    count: numberOfFilms,
    movies:  {},
    actors: {},
    genres: [],
    privat: false
};


// let i = 0;
// let a = 0, b = 0;
// if (numberOfFilms > 0) {
//     do {
//         do {
//             a = prompt('Last movie you watched?', '');
//         }
//         while (a.length === 0 || a.length > 50);
        
//         b = prompt('Rate this movie', '');
//             personalMovieDB.movies[a] = b;
//         i++;
//     }
//     while ( i < numberOfFilms);
// } else {
//     console.log("Realy?! No one?!");
// }

if (numberOfFilms > 0 && numberOfFilms < 10) {
    console.log('You watched little movies');
}else if(numberOfFilms >= 10 && numberOfFilms < 30) {
    console.log('You are average wacher!');
} else {
    console.log('You are movie maniac!');
}

console.log(personalMovieDB);

