import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


  // PROMISES
  const p = new Promise((resolve, reject) => {
    console.log('A promise has been initiated!');
    
    setTimeout(() => {
      resolve(1000);
    }, 3000);
  });

  p.then(data => console.log(data));
    // .then()
    // .then()
    // .catch()
    // .finally();
    
  // Sync analogy
  [1].map(x => x * 2).map(y => y * 100);