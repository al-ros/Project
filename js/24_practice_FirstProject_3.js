"use strict";

/* Base code before refactoring!
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
*/



/*  MY ANSWER! SHURE IS NOT CORRECT IN writeYourGeneres part!




const personalMovieDB = {
    count: function() {
        let numberOfFilms = +prompt('How many movies have you watched so far?', '');
    
        while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('How many movies have you watched so far?', '');
        }
    },

    movies: function rememberMyFilms() {
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
    },

    detectPersonalLevel: function() {
                            if (personalMovieDB.count < 10) {
                            console.log('You watched little movies');
                            }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                            console.log('You are average wacher!');
                            } else if (personalMovieDB.count >= 30) {
                            console.log('You are movie maniac!');
                            } else {
                            console.log('Error!');
                            }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <=3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Your favorite genre ${i}`);

            while(personalMovieDB.genres[i - 1] == '' || personalMovieDB.genres[i - 1] == null || isNaN(personalMovieDB.genres[i - 1])) 
            {
                personalMovieDB.genres[i - 1] = prompt(`Your favorite genre ${i}`);
            }
        }
        
    },

    privat: false,

    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    }

};

// personalMovieDB.count();
// personalMovieDB.movies();

// personalMovieDB.toggleVisibleMyDB();
// console.log(personalMovieDB.showMyDB(personalMovieDB.privat));

personalMovieDB.writeYourGenres(); */






const personalMovieDB =  {
    count: 0,
    movies:  {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many movies have you watched so far?', '');

         while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies have you watched so far?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
        console.log('You watched little movies');
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are average wacher!');
        } else if (personalMovieDB.count >= 30) {
        console.log('You are movie maniac!');
        } else {
        console.log('Error!');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        
        }else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Your favorite genre ${i}`);       //First variant
            
            // if (genre === ''  || genre == null) {
            //     console.log("Entered data isn't correct or not entered at all");
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }



            let genres = prompt(`Enter your favorite genre with comma between`).toLowerCase();     //Second variant
     
            if (genres === ''  || genres == null) {
                    console.log("Entered data isn't correct or not entered at all");
                    i--;
                } else {
                    personalMovieDB.genres = genres.split(', ');
                    personalMovieDB.genres.sort();
                }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genre ${i + 1} is ${item}`);
        });
    }
};
