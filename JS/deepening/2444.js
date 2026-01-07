const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split('\n');

const length = Number(input.shift());
let count = length * 2
const star = "*"
const space = " "

for (let i = 1; i < count; i++) {
    console.log(
        space.repeat(Math.abs(length - i)) + // 공백 계산
        star.repeat((count - Math.abs(count - 2 * i)) - 1) // 별 계산
    );
}