'use strict';

const user = {
    sex: 'female',
    age: 18
}

const user1 = Object.assign({}, user)

console.log(user1 == user)

// const user1 = user; // копируется не сам объект, а ссылка на один и тот же объект
// const user1 = Object.assign(user);

// const user = Object.assign({}, user) // клонирование объекта, то есть создаётся другая ссылка на объект
// user1.country = 'russia';

// console.log(user, user1);