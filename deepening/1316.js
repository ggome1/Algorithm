const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split("\n");

const length = input.shift();
let result = 0

for (str of input) {
    let lastChar = '';
    let pastChar = [];
    for (let i = 0; i < str.length; i++) {
        if (pastChar.includes(str[i])) break;
        if (i === str.length - 1) result++;
        if (str[i] === lastChar) continue;
        pastChar.push(lastChar);
        lastChar = str[i];
    }
}
console.log(result)