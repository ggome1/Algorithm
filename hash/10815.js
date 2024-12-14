const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split("\n").map(el => el.trim().split(" ").map(Number));
const N = input.shift()[0];
const arr_N = new Set(input.shift());
const M = input.shift()[0];
const arr_M = input.shift();

const result = [];

for (element of arr_M) {
    if (arr_N.has(element)) result.push(1)
    else result.push(0);
}

console.log(result.join(" "));