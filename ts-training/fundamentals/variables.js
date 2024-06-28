"use strict";
console.log("Hello World");
let found = true;
console.log(found);
for (let i = 0; i < 5; i++) {
    //console.log(i);
}
let numbers = [1, 2, 3, 4];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
//console.log(total);
numbers.push(5);
for (let number of numbers) {
    console.log(number);
}
