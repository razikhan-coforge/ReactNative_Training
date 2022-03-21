//Object Destructuring

const obj = {
    a: 1,
    b: 2,
    c: 3
}
//To delete a property mutably
//delete obj.c;
console.log(obj);

//Two method to read the data from object.
//1.When you know property is exists
console.log(obj.a);
console.log(obj.b);
//2.When you don't know that property is exists or not
const key = 'c'
const c = 'c'
console.log(obj['a']);
console.log(obj['b']);
console.log(obj[key]);
console.log(obj[c]);

//Object Destructuring
const {a, b, c: cc} = obj;
console.log(a);
console.log(b);
console.log(cc);

//O(1)
//Remove value with the help of spread operator
const obj1 = {
    x: 5,
    y: 6,
    z: 7
}
const {x, y, z} = obj1;
const {z: zz, ...rest} = obj1;
console.log(rest);
console.log(x);
console.log(y);
console.log(z);
console.log(obj1);

