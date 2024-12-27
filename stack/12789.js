const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split("\n").map(el => el.trim().split(" ").map(Number));
let length = input.shift();
const stack = [];
let cur = 1;
let status = 'Nice'

while (input[0].length) {
    const el = input[0][0];
    if (el === cur) {
        input[0].shift();
        cur++;
    }
    else if (stack[stack.length - 1] === cur) {
        stack.pop();
        cur++;
    }
    else {
        stack.push(input[0].shift());
    }
}

while (stack.length) {
    if (stack.pop() !== cur++) {
        status = 'Sad';
        break;
    }
}

console.log(status)

