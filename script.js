let nums = [54,90,23];

let newArr = nums.map((val) => {
    return val * val;
});

console.log(newArr);


let arr = [2,3,4,5,6,7];

let newAr = arr.filter((val) => {
    return val > 3;
});

console.log(newAr);

let aarr = [23,22,13,40];

const output = aarr.reduce((res, cur) => {
    return res < cur ? res : cur;
});

console.log(output);

let marks = [89,90,94,70,99,30]

let toppers = marks.filter((val) => {
    return val >= 90;
});

console.log(toppers);


let n = prompt("Enter a number:");

let aaar = [];

for(let i = 1; i <= n; i++){
    aaar[i-1] = i;
}
console.log(aaar);

let sum = aaar.reduce((res, cur) => {
    return res + cur;
});

console.log("sum =", sum);

let factorial = aaar.reduce((res, cur) => {
    return res * cur;
});

console.log("factorial =",factorial);