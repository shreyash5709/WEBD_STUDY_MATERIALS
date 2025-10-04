// function diceroll(){
//     console.log(Math.floor(Math.random()*6)+1);
// }
// diceroll();

// function average(a, b, c){
//     let avg = (a+b+c)/3;
//     console.log("Average is : ", avg);
// }

// average(10, 5, 0);

// Settimeout function
// for(let i=1; i<=30; i++){
//     setTimeout(function(){
//         console.log(31-i);
//     },i*500);
// }

// // Array mapping
// let arr = [1,-4,5,8,9];
// console.log(arr);

// function add10(ele){
//     return ele+10;
// }
// arr = arr.map(add10);
// console.log(arr);

// arr = arr.map(function(ele){
//     return ele*ele;
// })
// console.log(arr);

// arr = arr.map(ele => ele*2);
// console.log(arr);

// arr = arr.map((ele) => {
//     return ele/10;
// });
// console.log(arr);

// // Array mapping
// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);
// arr = arr.filter((ele)=>{
//     if(ele<5) return true;
//     else return false;
// });
// console.log(arr);

// // Array reduce
// let arr = [1,2,3,4,5];
// console.log(arr);
// let x = arr.reduce((a,b)=> (a+b));
// console.log(arr);
// console.log(x); 

// Array sort
let arr = [1,-9,-2,7];
console.log(arr);
arr = arr.sort();
console.log(arr);
arr = arr.sort((a,b)=> (a-b));
console.log(arr);