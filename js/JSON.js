'use strict';

const str = 'true';

console.log(typeof(JSON.parse(str)));

/////

const user = {
    name: 'igor',
    age: 30,
    /// ниже - то, что будет пропущено, то есть не преобразуется в JSON строку
    sayHi() {
        console.log('helo');
    },
    [Symbol("id")]: 123,
    something: undefined 
};

const userJson = JSON.stringify(user);
console.log(userJson);

const onlyName = JSON.stringify(user, ['name']);
console.log(onlyName);

const userJsonWithSpaces = JSON.stringify(user, null, 4);
console.log(userJsonWithSpaces);