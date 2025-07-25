import { interval, map, Observable, range, tap, timer } from "rxjs";

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

const stream$ = interval(2000)
    .pipe(map((x) => x * 2))
    .pipe(map((x) => x * 10));

// stream$.subscribe((x) => console.log(x));

stream$.subscribe({
    next: (data) => console.log(data),
    error: (err) => console.error('Error: ', err),
    complete: () => console.log('The stream has been completed!'),
})


const obs = range(1, 10).pipe(tap((x) => console.log('Hello:: ', x)));

obs.subscribe((x) => console.log(x));