'use strict';

const company = { 
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
};

function recursive(department) {
    if (Array.isArray(department)) {
        return department.reduce((accum, item) => accum + item, 0);
    } else {
        let sum = 0;
        for (let dep of Object.values(department)) {
            sum += recursive(dep);
        }
        return sum;
    }
}

console.log(recursive(company));