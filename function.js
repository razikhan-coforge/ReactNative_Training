//Function's

// const add = (a, b) => a + b;
// console.log(add(1,2));

// const add = (a, b, c) => a + b + c;
// console.log(add(1,2,3));

// const add = (a, b, c, d) => a + b + c + d;
// console.log(add(1,2,3,4));

//This is not a good approach because everytime i have to change my function


const add = (a, b, ...params) => {
    console.log(a);
    console.log(b);
    console.log(params);
    let result = 0;
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        result = result + element;
    }
}
console.log(add(1,2,3,4,5,6,7,8,9));


// const getFullName = (data) => {
// return `${data.firstName} ${data.lastName}`
// }

//Destructuring

// const getFullName = ({firstName, lastName}) => {
//     return `${firstName} ${lastName}`
// }

// const getFullName = ({firstName, lastName, ...rest}) => {
//     console.log(rest);
//     return `${firstName} ${lastName}`
// }

const getFullName = ({firstName, lastName, ...rest}, str) => {
    console.log(rest);
    console.log(str);
    return `${firstName} ${lastName}`
}
const user = {
    firstName: 'Razi',
    lastName: 'Khan',
    age: 30,
    gender: 'Male'
}
//console.log(getFullName(user));
console.log(getFullName(user, 'is a Developer'));


//==
//Not check data-type
const a = 1;
console.log(typeof a);
const b = '1';
console.log(typeof b);
console.log(a == b);

//===
//Check value and data-type
const a1 = 1;
console.log(typeof a1);
const b1 = 1;
console.log(typeof b1);
console.log(a1 === b1);


const calc1 = (a, b, operation) => {
   if(operation === '+') {
       return a+b;
   }
   if(operation === '-') {
    return a-b;
   }
}
console.log(calc1(2,4, '+'));
console.log(calc1(8,4, '-'));

const sum = (a, b) => a+b;
const sub = (a, b) => a-b;
const mul = (a, b) => a*b;
const div = (a, b) => a/b;

const calc = (a, b) => {
    return (operator) => {
        return operator(a, b)
    }
}

console.log(calc(2,3)(sum));
console.log(calc(5,3)(sub));
console.log(calc(5,3)(mul));
console.log(calc(9,3)(div));
console.log(sum(2,3));