const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split("\n").map(Number);

const length = input.shift();

const stack = [];

for (const el of input) {
    if (el) {
        stack.push(el);
    } else {
        stack.pop();
    }
}

let ans = 0;

for (const el of stack) {
    ans += el;
}

console.log(ans);