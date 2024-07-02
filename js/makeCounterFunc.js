'use strict';

function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
}
  
let counter = makeCounter();
let newCounter = makeCounter();
// Функции counter и counter2 созданы разными вызовами makeCounter.
// Так что у них независимые внешние лексические окружения, у каждого из которых свой собственный count.

counter();
newCounter();
newCounter();
newCounter();
newCounter();

console.log(counter(), newCounter()); // 1 4

{
    function Counter() {
        let count = 0;
      
        this.up = function() {
          return ++count;
        };
      
        this.down = function() {
          return --count;
        };
      }
      
      let counter = new Counter();
      
      console.log( counter.up() ); // 1
      console.log( counter.up() ); // 2
      console.log( counter.down() ); // 1
}