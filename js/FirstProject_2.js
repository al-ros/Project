'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you watched so far?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you watched so far?', '');
    }
}

start();

const personalMovieDB =  {
    count: numberOfFilms,
    movies:  {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
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
}

// rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
    console.log('You watched little movies');
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are average wacher!');
    } else if (personalMovieDB.count >= 30) {
    console.log('You are movie maniac!');
    } else {
    console.log('Error!');
    }
}

// detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


// function writeYourGenres() {
//     for (let i = 1; i <=3; i++) {
//         const genre = prompt(`Your favorite genre ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }


// or


function writeYourGenres() {
    for (let i = 1; i <=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre ${i}`);
    }
}

writeYourGenres();