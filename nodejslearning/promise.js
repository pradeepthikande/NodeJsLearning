// setTimeout(()=>{
//     console.log( 'TIMED OUT!' )
// },300);

//2nd program
// var promise = new Promise(function (fulfill, reject) {
//     setTimeout(()=> {
//       fulfill('FULFILLED!');
//     }, 300);
//   });
//   promise.then(console.log);

//3rd program
// var promise = new Promise(function(fulfill , reject){
//     setTimeout(()=>{
//      reject(new Error('REJECTED!'))
//     },300);
// });
// function onReject(error){
//     console.log(error.message);
// }
// promise.then(null,onReject);

//4th program
// var promise = new Promise(function(fulfill,reject){
//     fulfill('I FIRED ');
//     reject(new Error('I DID NOT FIRE'))
// });
// function onReject(error){
//     console.log(error.message);
// }
// promise.then(console.log,onReject);

//5th program
// var promise = new Promise(function(fulfill,reject){
//     fulfill('PROMISE VALUE');
// })
// promise.then(console.log);
// console.log('MAIN PROGRAM');

//6th program
// promise = Promise.reject(new Error('THERE IS AN ERROR!!'));
// function onReject(error){
//         console.log(error.message);
//     }
// promise.catch(onReject);

//7th program
// var firstPromise = first();
// var secondPromise = firstPromise.then(function(val){
//     return second(val);
// });
// secondPromise.then(console.log);

//8th program
// function attachTitle(result){
//     return 'DR. '+ result;
// }
// Promise.resolve('MANHATTAN')
//        .then( attachTitle)
//        .then(console.log);

//9th program
// function parsePromised(json) {
//     return new Promise(function (fulfill, reject) {
//       try {
//         fulfill(JSON.parse(json));
//       } catch (e) {
//         reject(e);
//       }
//     });
//   }
  
//   function onReject(error) {
//     console.log(error.message);
//   }
  
//   parsePromised('C:\Users\\Hi\\Desktop\\nodejslearning\\promiseShop\\app.json')
//   .then(null, onReject);

//10th program
// function iterate(num) {
//     console.log(num);
//     return num + 1;
//   }
  
//   function alwaysThrows() {
//     throw new Error('OH NOES');
//   }
  
//   function onReject(error) {
//     console.log(error.message);
//   }
  
//   Promise.resolve(iterate(1))
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(alwaysThrows)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .catch(onReject);

//11th
// function all(a,b){
//     return new Promise(function(fulfill,reject){
//         var counter = 0;
//         var out = [];

//         a.then(function(val){
//             out[0] = val;
//             counter++;
//             if(counter >= 2){
//                 fulfill(out);
//             }
//         });

//         b.then(function(val){
//             out[1] = val;
//             counter++;
//             if(counter >= 2){
//                 fulfill(out);
//             }
//         })

//     })

// }
// all(getPromise1(), getPromise2())
//   .then(console.log);

//12th
// var http = require('q-io/http');
// http.read('http://localhost:1337"')
// .then(function(json){
//     console.log(JSON.parse(json));
// })
// .then(null, console.error)
// .done()
