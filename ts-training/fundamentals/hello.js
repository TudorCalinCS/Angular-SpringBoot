console.log("Hello World");
var found = true;
console.log(found);
for (var i = 0; i < 5; i++) {
    //console.log(i);
}
var numbers = [1, 2, 3, 4];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
//console.log(total);
numbers.push(5);
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    console.log(number);
}
