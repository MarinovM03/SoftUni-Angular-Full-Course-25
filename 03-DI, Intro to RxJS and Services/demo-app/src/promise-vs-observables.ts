import { interval, Observable, timer } from "rxjs";

// PROMISES
// - Promise - are not lazy, code invokes!
// - Can't be cancelled!

// - Subscribes only to 1 value
const p = new Promise((resolve, reject) => {
    console.log('A promise has been initiated!');
    
    setTimeout(() => {
        resolve(1000);
    }, 3000);
});

p.then((data) => console.log('Promise: ', data))
  .then()
  .then()
  .catch(e => console.error(e));
  
  
// Sync analogy - Promises
[1].map((x) => x * 2).map((y) => y * 100);

// Sync Analogy - Observables
[1, 2, 3, 4].map((x) => x * 2).map((y) => y * 100);


// Observables

// // - Observables are lazy
// // - Unsubscribe
// const o = new Observable((observer) => {
//     console.log('Hello from observable');

//     setTimeout(() => {
//         observer.next(101);
//         observer.next(102);
//         observer.next(103);
//     }, 2000);
// });

// o.subscribe((data) => {
//     console.log('from observable: ', data);
// });


// const interval = (intervalValue: number) => {
//     const o = new Observable<number>((observer) => {
//         let counter = 0;

//         const timer = setInterval(() => {
//             observer.next(counter++);
//         }, intervalValue);

//         return () => {
//             clearInterval(timer);
//         }
//     });

//     return o;
// }

interval(2000).subscribe((data) => {
    console.log(data);
});