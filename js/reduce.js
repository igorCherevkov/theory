'use strict';

// посчитать количество чётных и нечётных с помощью reduce

const arr = [1,2,3,4,5,6]

const count = arr.reduce((accum, item) => {
    if (item % 2 == 0) {
        accum[0] += 1;
    } else {
        accum[1] += 1;
    }
    return accum;
} , [0, 0])

console.log(count);

const sum = arr.reduce((accum, item) => accum + item, 0);

console.log(sum);