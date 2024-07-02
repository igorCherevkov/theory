'use strict';

const num = 123;

console.log(num.toString());
console.log(num)

const user = {
    name: 'igor',
    age: 30,

    toString() {
        return this.name
    },

    valueOf() {
        return this.age
    }
};

console.log(String(user));
console.log(Number(user));