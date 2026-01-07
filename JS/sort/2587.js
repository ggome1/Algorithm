const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split("\n").map(Number);
input.sort((a, b) => a - b);
const result = input.reduce((sum, cur) => sum + cur, 0)

console.log(Math.floor(result / input.length));
console.log(input[Math.floor(input.length / 2)]);