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

// My answer:

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

// if (personalMovieDB.count < 10) {
//     console.log('You watched little movies');
// }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('You are average wacher!');
// } else if (personalMovieDB.count >= 30) {
//     console.log('You are movie maniac!');
// } else {
//     console.log('Error!');
// }

// console.log(personalMovieDB);





// Teachers answer:

let numberOfFilms = +prompt('How many movies have you watched so far?', '');

const personalMovieDB =  {
    count: numberOfFilms,
    movies:  {},
    actors: {},
    genres: [],
    privat: false
};
 
for (let i = 0; i < 2; i++) {
    const a = prompt('Last movie you watched?', ''),
          b = prompt('Rate this movie', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }
    
}

console.log(personalMovieDB);
