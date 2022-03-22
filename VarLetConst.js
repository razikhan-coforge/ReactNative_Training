// // Ecma Script
// // ES5

// // ES6(ES2016) +
// // |
// // ES2022

// //1. Solve the ES5 problems in ES6+
// //2. For complex operation user has to depend on third party libraries
// //3. New javascript they have added most of the features(no need to depend on third party library)
// //4. Modern syntex
// //5. For large scale project we can use javascript

// //1. Hoisting

// // var a = 1;
// // var b = 2;
// // function abc() {
// //     var c = 3;
// //     console.log(c);
// // }
// // abc();
// // //console.log(c);

// // //IIFE(Immediately Invoked Function Expression) Funtion:- Call automatically
// // (function(bb) {
// //  console.log(a);
// //  console.log(bb);
// // })(b)



// //Solution for Hoisting + Scoping

// //2. Work on let
// //console.log(a);
// //Can't redeclare
// //Can Reassign Value
// let a = 1;
// a = 3;
// console.log(a);

// var b = 3;
// {
//     //console.log(b);
//     let b = 2;
// }
// console.log(b);


// //3. Work on const
// //Can't redeclare
// //Can't reassign value
// //Help in memory management
// const c = 10;
// //c = 20;
// //const c = 4;
// console.log(c);
// {
//  const d = 5;
// }
// //console.log(d);

// const arr = [1,2,,3]
// console.log(arr);
// arr.push(4);
// console.log(arr);

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// obj.d = 4;
// console.log(obj);


// //Data-Types

// //1.Premitive Type
// //String
// //Number
// //Boolean
// //Bigint
// //Symbol

// //2.Non-Premitive Type
// //Object
// //Array
// //undefine
// //null

// //null
// //console.log(abc);

// //undefine
// //var xyz;
// //console.log(xyz);

// //Fetures   Hoisting   Scoping   Reassign   Redeclare  
// //var       Yes        No        Yes        Yes   
// //let       No         Yes       Yes        No    
// //const     No         Yes       No         No









// // var Parameter
// var r = 500;
// console.log(r);
// {
//     let r = 500
//     console.log(r);
// }
// console.log(r);





// // const Parameter
// const employee = {
//     firstName: 'Razi',
//     lastName: 'Khan'
// }
// console.log(employee);
// employee.firstName = 'Rahul';

// console.log(employee);

// employee = {
//     age: 30
// }

// console.log(employee);







// //Default Parameter
// function say(message) {
//     message = typeof message !== 'undefined' ? message : 'Hi'
//     console.log(message);
// }

// say('Hello')
// say()

// function say1(message = 'Hi') {
//     console.log(message);
// }

// say('Hello 1')
// say()






// //Rest Parameter
// function foo(...args) {
//     console.log(...args);
// }
// foo(1)
// foo(1,2)
// foo(1,2,3)

// function test(a, b, ...args) {
//     console.log(a);
//     console.log(b);
//     console.log(...args);
// }
// test('A', 'B', 1,2,3, 'C')








// //Spread Operator
// const odd = [1,3,5,7,9]
// const even = [2,4,6,8,10]

// const combined = [...odd, ...even]
// const combined1 = [...odd, 100, 200, ...even, 111]
// console.log(combined);
// console.log(combined1);






// //Destructuring
// const employee = {
//     id: 1,
//     firstName: 'Razi',
//     lastName: 'Khan',
//     email: 'yxz@gmail.com'
// }

// // let id = employee.id
// // let firstName = employee.firstName
// // let lastName = employee.lastName
// // let email = employee.email

// // console.log(id);
// // console.log(firstName);
// // console.log(lastName);
// // console.log(email);

// let {id, firstName, lastName, email} = employee;
// //let { firstName } = employee;
// console.log(firstName);

// function getScore() {
//    return [51, 60, 70, 40]
// }

// let scores = getScore();
// console.log(scores);
// let a = scores[0]
// let b = scores[1]
// let c = scores[2]
// let d = scores[3]
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);






// //for..of
// let scores = [10,20,30,40]
// for (let score of scores) {
//     console.log(score);
// }

// let names = ['Razi', 'Vaseem', 'Rahul']
// for (let name of names) {
//     console.log(name);
// }






// //Template Literal
// let str = "Hello";
// let str1 = 'World';

// let firstName = 'Razi'
// let lastName = 'Khan'

// let fullName = firstName + ' ' + lastName
// let fullName1 = `${firstName} ${lastName}`
// console.log(fullName);
// console.log(fullName1);

// let name = 'Vaseem'
// let email = 'v@gmail.com'
// let id = 100
// let address = 'Mawana'
// console.log(`My name is ${name}, My country is ${address}, My email is ${email}`);

// let message = 'Hello' +
// 'from' +
// 'Razi'
// console.log(message);

// let message1 = `
// Hello 
// this
// is
// Razi
// Khan
// `
// console.log(message1);







// //Arrow Functions
// // old syntex
// function hello(name){
//     return 'Hello ' + name;
// }
// console.log(hello('Razi'));

// // new syntex
// let welcome = (name) => 'Welcome ' + name;
// console.log(welcome('Vaseem'));

// let sum = (a, b) => a + b;
// console.log(sum(100, 200))
// console.log(typeof sum)

// let Hi = name => 'Hi ' + name;
// console.log(Hi())

// //For single line
// let foo = () => '' 
// //For Multi line
// let foo1 = () => {
// }





// //Map Function
// const numbers = [12, 55, 56, 78, 99]
// const newArray = numbers.map(item => item * 10)
// console.log(numbers);
// console.log(newArray);

// const names = ['Razi', 'Vaseem', 'Rahul', 'Saurabh']
// const newName = names.map(e => 'Mr. ' + e)
// console.log(names);
// console.log(newName);


// const employees = [
//     { id: 1, firstName: 'Razi', lastName: 'Khan', gender: 'Male'},
//     { id: 2, firstName: 'Vaseem', lastName: 'Saifi', gender: 'Male'},
//     { id: 3, firstName: 'Stacy', lastName: 'Watson', gender: 'Female'},
//     { id: 4, firstName: 'Rahul', lastName: 'Verma', gender: 'Male'}
// ];
//Print employees full name with title -map()
//Mr. Razi Khan
//Mrs. Stacy Watson

// const newName = employees.map(data => data.gender !== 'Male' ? `Mrs. ${data.firstName} ${data.lastName}` : `Mr. ${data.firstName} ${data.lastName}`)
// console.log(newName);

// const newList = employees.map(emp => transform(emp))
// function transform(employees) {
//     if (employees.gender == 'Male') {
//         return `Mr. ${employees.firstName} ${employees.lastName}`
//     }
//     else {
//         return `Mrs. ${employees.firstName} ${employees.lastName}`
//     }
// }
// console.log(newList);







// //Class
// //Class as a manually
// class Person {
//     firstName;
//     lastName;
//     getFullName() {
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }

// let person = new Person();
// person.firstName = 'Razi'
// person.lastName = 'Khan'
// person.getFullName();

// //Class as a expression
// const Person = class {
//     firstName;
//     lastName;
//     getFullName() {
//       console.log(`${this.firstName} ${this.lastName}`);
//     }
// }

// const person = new Person();
// person.firstName = 'Vaseem'
// person.lastName = 'Saifi'
// person.getFullName();


// class Book {
//     // title;
//     // author;
//     // price;
//     constructor(title, author, price){
//      this.title = title;
//      this.author = author;
//      this.price = price;
//     }
//     getBookInfo() {
//       console.log(`Title = ${this.title}, Author = ${this.author}, Price = ${this.price}`);
//     }
// }

// const book1 = new Book('Title 1', 'Author 1', '100')
// console.log(book1);