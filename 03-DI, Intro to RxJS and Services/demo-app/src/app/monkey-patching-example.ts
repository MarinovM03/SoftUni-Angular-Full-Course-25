// Standard console log
console.log(123);

// Monkey patched console log
const originalConsoleLog = console.log;

console.log = (...args) => {
    originalConsoleLog(...args); // invokes the original copy

    // Notify Angular to detect changes
    console.warn('Notify Angular to Render!');
    //NotifyAngularToDetectChanges()
};

console.log(3456);