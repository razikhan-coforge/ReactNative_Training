const arr = [1,2,3,4,5,6];

//Mutable
//LI(Last-IN)
arr.push(7);
console.log(arr);

// LO(Last-Out)
arr.pop();
console.log(arr);

//FI(First-In)
arr.unshift(0);
console.log(arr);

//FO(First-Out)
arr.shift();
console.log(arr);


//Immutable
const newArr = [0, ...arr, 7]
console.log(newArr);

const index = 3;
const arr1 = arr.slice(0, index)
console.log(arr1);
const arr2 = arr.slice(3)
console.log(arr2);


const addDatainMiddleImmutably = [
    ...arr1,
    8,
    ...arr2
];
console.log(addDatainMiddleImmutably);


const addDatainMiddleImmutably1 = [
    ...arr.slice(0, index),
    8,
    ...arr.slice(index + 1)
];
console.log(addDatainMiddleImmutably1);


const addDatainMiddleImmutably2 = [
    ...arr.slice(0, index),
    ...arr.slice(index + 1)
];
console.log(addDatainMiddleImmutably2);


//Immutable Method of Array

//findIndex
//O(logN)
//If record exist then return index
//else return -1
console.log(arr.indexOf(4));

const arr11 = [1,2,3,4,3,5,6];
const newArr1 = arr11.fill(10, 1, 4);
console.log(newArr1);

//O(1)
const s = new Set(arr11)
console.log(s.has(3));

const i = arr11.findIndex((item, index) => {
   console.log(item);
   return item === 3
})
console.log(i);



const user = [
    {
        name: 'Razi',
        age: 30,
        gender: 'Male'
    },
    {
        name: 'Vaseem',
        age: 32,
        gender: 'Male'
    },
    {
        name: 'Rahul',
        age: 29,
        gender: 'Male'
    },
    {
        name: 'Aaliya',
        age: 25,
        gender: 'Female'
    },
    {
        name: 'Deepika',
        age: 26,
        gender: 'Female'
    },
    {
        name: 'Priyanka',
        age: 35,
        gender: 'Female'
    },
    {
        name: 'Faiza',
        age: 10,
        gender: 'Female'
    }
]
const i1 = user.findIndex((item) => {
    return item.name === 'Deepika'
})
console.log(i1);


//find
//O(LogN)
const rohit = user.find((item) => {
    return item.name === 'Deepika'
})
console.log(rohit);


//filter
//O(N)
const maleRecord = user.filter((item) => {
    return item.gender === 'Male'
})
console.log(maleRecord);

const arr3 = arr.filter(item => {
    return item !== 3;
})
console.log(arr3);


//some
const isRaziInTeam = user.some(item => {
    return item.name === 'Razi'
})
console.log(isRaziInTeam);


//every
const isEveryOneAdult = user.every(item => {
    return item.age > 18;
})
console.log(isEveryOneAdult);


