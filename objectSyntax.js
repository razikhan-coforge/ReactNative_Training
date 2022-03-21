//Object
//we use the object to bind the related information together

const firstName = 'Razi';
const lastName = 'Khan';
const age = 30;

//Bind releated information together.
//Objects are key-value pair
//ES6+

// const user = {
//     firstName: 'Razi',
//     lastName: 'Khan',
//     age: 30,
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// const user = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
const user = {
    firstName,
    lastName,
    age,
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.fullName());


