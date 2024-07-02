'use strict';

const arr = [1,2,3,4,5,6,7,8,9,10]
const res = arr.reduce((sum, item) => sum + item , 0);
console.log(res)

let sum = 0;
for (let item of arr) {
    if (item % 2 === 0) {
        sum += item
    }
}
console.log(sum)

/////
const doublearr = [1.456, 2.125, 3.32, 4.1, 5.34]
doublearr.forEach((value, index, array) => array[index] = parseFloat(value.toFixed(1)));
console.log(doublearr)

////
let start = ['https://example', 'https://example1', 'http://example']
let end = ['index.html', 'styles.html', 'indx.htl']

start = start.filter((value) => value.startsWith('https://'));
end = end.filter((value) => value.endsWith('.html'));

console.log(start, end)

/////
const arr1 = [1,2,3]
const arr2 = [4,5,6]

const mergedarr1 = [...arr1, ...arr2]
const mergedarr2 = arr1.concat(arr2);
console.log(mergedarr1, mergedarr2)