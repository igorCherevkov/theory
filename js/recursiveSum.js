'use strict';

function recursiveSum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + recursiveSum(arr.slice(1));
}

const arr = [1,2,3,4,5]

console.log(recursiveSum(arr));

console.log(undefined === undefined)