const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split("\n").map(Number);
const length = input.shift();
const no_repeat = new Set(input);
const result = [...no_repeat].sort((a, b) => a - b);
console.log(result.join("\n"));