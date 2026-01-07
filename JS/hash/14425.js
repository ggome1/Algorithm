const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split("\n").map(el => el.trim());
const [N, M] = input.shift().split(" ").map(Number);

const S = new Set();
let count = 0;

for (let i = 0; i < N; i++) {
    S.add(input.shift());
}

for (element of input) {
    if (S.has(element)) count++;
}

console.log(count);


