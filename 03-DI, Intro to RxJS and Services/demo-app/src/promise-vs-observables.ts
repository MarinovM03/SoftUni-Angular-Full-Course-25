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

p.then((data) => console.log(data))
  .then()
  .then()
  .catch(e => console.error(e));
  
// Sync analogy
[1].map(x => x * 2).map(y => y * 100);