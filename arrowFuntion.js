//Function's
//Hositing concept is applicable to the fuction also

// console.log(add(1,2));
// console.log(add(2,3));

// //Named Function
// function add(a,b) {
//     return a + b;
// }

// //Method overloading not available in javascript
// //Due to hositing override problem arise
// function add() {
//     return 'heacked...'
// }


//Anonymous Function
//Hositing will not work for anonymous fuunction
//console.log(add(1,2));
// const add = function(a, b) {
//     return a + b
// }

//Advance syntex of function
//1. Syntex
// const add = (a, b) => {
//     return a + b;
// }

//2. Syntex
//const add = (a, b) => { return a +b };

//3. Syntex
//const add = (a, b) => a + b;

//console.log(add(1,2));
//console.log(add(3,2));

//Redeclaration of function will not work for Anonymous Function
// function add() {
//     return '';
// }



//const greet = (name) => `Hello, ${name}`

//Arrow function is lighter from normal function and it will occupy a less memory
//With one parameter we don't need bracket wrapper() in parameter
const greet = name => `Hello, ${name}`
console.log(greet('Razi'));
