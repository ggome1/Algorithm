const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split("\n").map(el => el.trim().split(" "))

const [A, B] = input.shift().map(Number)

const map_A = new Map(input[0].map((e) => [e, 0]));
const map_B = new Map(input[1].map((e) => [e, 0]));

let count = 0;

input[0].forEach((e) => {
    if(!map_B.has(e)) count++;
})
input[1].forEach((e) => {
    if(!map_A.has(e)) count++;
})

console.log(count);