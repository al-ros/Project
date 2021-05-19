"use strict";

//Function Declaration:

// let num = 20;


// showFirstMessage('Hello world!');


// function showFirstMessage(text) {
//     console.log(text);
//     // let num = 10;
//     console.log(num);
// }

// showFirstMessage('Hello world!');
// console.log(num);





// function calc(a, b) {
//     return (a + b);
//     // console.log('abcd');
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));





function ret() {
    let num = 50;

    // Some big calculation


    return num;
}

const anotherNum = ret();
console.log(anotherNum);





// Function Expression:

logger();

const logger = function() {
    console.log('Hello');
};

logger();