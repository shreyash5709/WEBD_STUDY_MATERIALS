const sum = (a, b) =>  a + b;
const mul = (a, b) => a * b;
const g = 9.81;
const pi = 3.14;

// let obj = {
//     sum, mul, g, pi,
// };

// module.exports = obj;  for require exports method

// Use ES6 named exports
export { sum, mul, g, pi };

// Or export individually:
// export const sum = (a, b) => a + b;
// export const mul = (a, b) => a * b;
// export const g = 9.81;
// export const pi = 3.14;