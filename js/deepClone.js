'use strict';

const user = {
    age: 20,
    address: {
        country: 'russia',
        town: 'taganrog'
    }
}

const deepClone1 = JSON.parse(JSON.stringify(user));

const deepClone2 = structuredClone(user);
deepClone2.address.country = 'uk';

console.log(user)
console.log(deepClone1)
console.log(deepClone2);

console.log(Infinity % Infinity)
console.log(Infinity / 0)