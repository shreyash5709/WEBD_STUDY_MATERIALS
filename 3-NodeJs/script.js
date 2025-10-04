// let n = 5;
// for(let i = 1; i <= n; i++) {
//     console.log(i);
// }

// let arg = process.argv;
// for(let i = 2; i < arg.length; i++) {
//     console.log("Hello : ", arg[i]);
// }

// $ node script.js Shreyash Amit Abhay Shonu
// Hello :  Shreyash
// Hello :  Amit
// Hello :  Abhay
// Hello :  Shonu

// const{sum, mul, g, pi} = require('./math');
// console.log(sum(5, 6));
// console.log(mul(5, 6));
// console.log(pi*2);
// console.log(g);

// directory requiring

// const fruits = require("./fruits");
// console.log(fruits[0].name);

import {sum, mul, g, pi} from "./math.js"
console.log(sum(2, 3));