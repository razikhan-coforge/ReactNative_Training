//Promises

// const fs = require('fs')
// const myPromise = new Promise((resolve, reject) => {
//   fs.readFile('data.txt', (err, data) => {
//      if(err){
//        reject('error')
//      }else {
//        resolve(data)
//      }
//   })
// })

// myPromise
//  .then(data => console.log(data.toString()))
//  .catch(error => console.log(error))











// function message() {
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            resolve('Hi promise is been resolved.')
//        }, 3000)
//     }) 
// }

// //Without async and await
// function msg() {
//     console.log('Welcome to async and await function');
//     message()
//         .then(response => console.log(response))
//         .catch(error => console.log(error))
//     console.log('end');
// }

// //With async and await
// async function msg() {
//     console.log('Welcome to async and await function1');
//     const result = await message()
//     console.log('end1');
// }
// msg();












// function first() {
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            resolve('First')
//        }, 3000)
//     })
// }

// function second() {
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            resolve('Second')
//        }, 1000)
//     })
// }

// function third() {
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            resolve('Third')
//        }, 2000)
//     })
// }

// // function caller() {
// //     first()
// //        .then(response => console.log(response))
// //        .catch(error => console.log(error))

// //      second()  
// //        .then(response => console.log(response))
// //        .catch(error => console.log(error))

// //      third()  
// //        .then(response => console.log(response))
// //        .catch(error => console.log(error))
// // }

// // async function caller() {
// //     const a = await first()
// //     const b = await second()
// //     const c = await third()
// //     console.log(a);
// //     console.log(b);
// //     console.log(c);
// // }

// caller();










// function who() {
//     return new Promise(resolve => {
//        setTimeout(() => {
//            resolve('Razi Khan')
//        }, 2000)
//     })
// }

// function what() {
//     return new Promise(resolve => {
//        setTimeout(() => {
//            resolve('is playing')
//        }, 2000)
//     })
// }

// function where() {
//     return new Promise(resolve => {
//        setTimeout(() => {
//            resolve('cricket')
//        }, 2000)
//     })
// }

// async function msg() {
//     const a = await who();
//     const b = await what();
//     const c = await where();

//     console.log(`${a} ${b} ${c}`);
// }

// msg();











// const fs = require('fs')
// const util = require('util')

// const read = util.promisify(fs.readFile);

// let getFileData = async () => {
//     try{
//       const data = await read('data.txt')
//       console.log(data.toString())
//     }catch(error){
//        console.log(error.message);
//     }
// }

// getFileData();









