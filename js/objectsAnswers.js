'use strict';  

a = {b : 5};
b = {n: 1};

c = b;

a.z = b.n;

a.e = { a : b };

a.e.m = {v : 8};

console.log(a);