console.log("Hello World"); 
let found: boolean = true;
console.log(found);

for(let i=0;i<5;i++){
    //console.log(i);
}

let numbers: number[] = [1,2,3,4]
let total: number=0;
for(let i=0;i<numbers.length;i++){
    total+=numbers[i];
}
//console.log(total);
numbers.push(5);
for(let number of numbers){
    console.log(number);
}
