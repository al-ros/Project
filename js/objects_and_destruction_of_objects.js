"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    collors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();
console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;
// console.log(options);

// console.log (options['collors']['border']);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Proparty ${i} has value ${options[key][i]} `);
//             counter++;
//         }
//     } else {
//     console.log(`Proparty ${key} has value ${options[key]} `);
//     counter++;
//     }
// }

// console.log(counter);





