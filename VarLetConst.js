// Ecma Script
// ES5

// ES6(ES2016) +
// |
// ES2022

//1. Solve the ES5 problems in ES6+
//2. For complex operation user has to depend on third party libraries
//3. New javascript they have added most of the features(no need to depend on third party library)
//4. Modern syntex
//5. For large scale project we can use javascript

//1. Hoisting

// var a = 1;
// var b = 2;
// function abc() {
//     var c = 3;
//     console.log(c);
// }
// abc();
// //console.log(c);

// //IIFE(Immediately Invoked Function Expression) Funtion:- Call automatically
// (function(bb) {
//  console.log(a);
//  console.log(bb);
// })(b)



//Solution for Hoisting + Scoping

//console.log(a);
//Can't redeclare
//Can Reassign Value
let a = 1;
a = 3;
console.log(a);

var b = 3;
{
    //console.log(b);
    let b = 2;
}
console.log(b);

//Can't redeclare
//Can't reassign value
const c = 10;
//c = 20;
//const c = 4;
console.log(c);

{
 const d = 5;
}
//console.log(d);

const arr = [1,2,,3]
console.log(arr);
arr.push(4);
console.log(arr);

const obj = {
    a: 1,
    b: 2,
    c: 3
}
obj.d = 4;
console.log(obj);


//Data-Types

//1.Premitive Type
//String
//Number
//Boolean
//Bigint
//Symbol

//2.Non-Premitive Type
//Object
//Array
//undefine
//null

//null
//console.log(abc);

//undefine
//var xyz;
//console.log(xyz);

//Fetures   Hoisting   Scoping   Reassign   Redeclare  
//var       Yes        No        Yes        Yes   
//let       No         Yes       Yes        No    
//const     No         Yes       No         No