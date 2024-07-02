'use strict';

// Все известные вам способы превратить строку ‘Hello, world’ в ‘Hello, wood’
// str =  ‘Hello, world’  --->‘Hello, wood’

const str = 'Hello, world';

console.log(str.replace('world', 'wood'));

const index = str.indexOf('rl');
console.log(str.slice(0, index) + 'o' + str.slice(index + 2)); 
console.log(str.slice(0, 7) + 'wood');
console.log(str.substring(0, index) + 'o' + str.substring(index + 2));

const arr = str.split(' ');
arr.length = 1;
arr.push('wood')
console.log(arr.join(' '));

console.log(str.substr(0, 6) + " wood");

console.log(str.slice(-5))