const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split('\n');

let sub_score = 0;
let sum = 0
const score = {
    'A+' : 4.5,
    'A0' : 4.0,
    'B+' : 3.5,
    'B0' : 3.0,
    'C+' : 2.5,
    'C0' : 2.0,
    'D+' : 1.5,
    'D0' : 1.0,
    'F' : 0,
}

for (const subs of input) {
    const sub = subs.split(' ')
    if (sub[2] == 'P') continue;
    sum += Number(score[sub[2].trim()]) * Number(sub[1][0]);
    sub_score += Number(sub[1][0])
}
console.log(sum / sub_score)
