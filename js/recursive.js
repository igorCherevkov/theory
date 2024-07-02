'use strict';

/////
const num = Math.pow(2, 3);
console.log(num);

function pow(x, n) {
    if (n === 1) {
        return x;
    } 
    return x * pow(x, n-1);
}

function newPow(x, n) {
    return n === 1 ? x : x * pow(x, n-1);
}

console.log(pow(2, 3));
console.log(newPow(2, 3));

//////////
function sum(x) {
    if (x === 1) {
        return x;
    }
    return x + sum(x - 1);
}

console.log(sum(5));

//////
function fact(x) {
    if (x === 1) {
        return x;
    }
    return x * fact(x - 1);
}

console.log(fact(5));

/////
function fib(x) {
    if (x <= 1) {
        return x;
    }
    return fib(x - 1) + fib(x - 2);
}

console.log(fib(7));