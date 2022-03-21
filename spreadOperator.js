//Mutable & Immutable Programing
//Mutable:- We can change the value 
//Immutable:- We cann't change the value

const arr = [1,2,3,4,5,6,7,8,9,10];
let result = false;
//Complexity
//O(N)
for (let i = 0; i < arr.length; i++) {
    console.log(i);
    const element = arr[i];
    if (element === 6) {
      result = true;
    }
}
console.log(result);

//O(LogN)-> Better then O(N)
//Greater then 1 time and less then length time
for (let i = 0; i < arr.length; i++) {
    console.log(i);
    const element = arr[i];
    if (element === 6) {
      result = true;
      break
    }
}
console.log(result);

//O(1)-> Best Complexity
console.log(arr[5] === 6);

//O(NLogN)
//O(n**2)N-Square
//O(n^2)Infinite

const obj = {
    a: 1,
    b: 2,
    c: 3
}
//This is mutable way to add property
obj.d = 4;
console.log(obj);

//O(N)
const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    b: 4,
    e: 10
}
obj1.d = 3;
console.log(obj1);

//O(1)
const obj2 = Object.assign({}, obj1, {d: 4});
console.log(obj2);

//Coping the data with the help of spread operator
const obj3 = {...obj2, r: 5}
console.log(obj3);

const a  = {
    a: 1
}
const b = {
    b: 2
}
//Merge two property with the help of spread operator
const ab = {...a, ...b}
console.log(ab);

