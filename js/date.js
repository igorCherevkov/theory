'use strict';

const now = new Date();
console.log(now);
const year1970 = new Date(0)
console.log(year1970)

const nowMilli = Date.now(); // количество миллисекунд, прошедших с 1970 года
console.log(nowMilli);
console.log(+now)

const date = new Date('2004, 01, 13');
console.log(date);

const nextDate = new Date(2004, 0, 13);
const year = nextDate.getFullYear();
const month = nextDate.getMonth();
const day = nextDate.getDate();
const hours = nextDate.getHours();
const minutes = nextDate.getMinutes();
const seconds = nextDate.getSeconds();
const milliseconds = nextDate.getMilliseconds();
console.log(nextDate, year, month, day, hours, minutes, seconds, milliseconds);
nextDate.setHours(10);
console.log(nextDate);

date.setDate(date.getDate() + 2);
console.log( date );
date.setSeconds(date.getSeconds() + 20);
console.log(date);

const ms = Date.parse(date); // количество милисекунд с этого времени
console.log(ms); 