'use strict';

const user1 = {
    sex: 'man',
    'full age': 20
}

const user2 = new Object({
    sex: 'female',
    age:18
})

console.log(user1, user2);

user1.address = 'taganrog';
user2['address'] = 'taganrog';

console.log(user1, user2);

user1.address = 'pokrovskoye';

console.log(user1);

delete user1.address;

console.log(user1);

user1['full address'] = 'taganrog rostov region'
console.log(user1)