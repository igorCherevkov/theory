'use strict';

let user = {
    age: 20,
    address: {
        country: 'russia',
        town: 'taganrog'
    }
}

let jake = Object.assign({}, user);
user.address.country = 'not russia' // problem
console.log(jake.address.country) // bot russia

// Чтобы исправить это, мы должны использовать цикл клонирования, который 
// проверяет каждое значение user[key] и, если это объект, тогда также копирует 
// его структуру. Это называется «глубоким клонированием».