const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split("\n").map(el => el.trim());

const length = +input.shift();
const ans = [];

for (let i = 0; i < length; i++) {
    const stack = [];
    let status = 'YES';

    for (const el of input[i]) {
        if (el === '(') {
            stack.push(1);
        } else {
            if (!stack.pop()) {
                status = 'NO';
                break;
            }
        }
    }
    if (stack.length > 0) {
        status = 'NO';
    }
    ans.push(status);
}
console.log(ans.join("\n"))