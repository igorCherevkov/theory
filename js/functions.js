'use strict';

function F() {};

let f = function G() { return 23 };

console.log(typeof F); // func
console.log(typeof G); // undefined
console.log(typeof f); // func
console.log(typeof f()) // number
// console.log(typeof G()); // ошибка, тк G будет видна только в теле функции, и не видна в глобальной области видимости