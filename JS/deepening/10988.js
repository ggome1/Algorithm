const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim();
const length = input.length;
for (let i = 0; i < Number(length / 2); i++) {
    if (input[i] !== input[length - 1 - i]) {
        console.log(0);
        return;
    }
}
console.log(1);
return;