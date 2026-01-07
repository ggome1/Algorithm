const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim();

const alphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let arr = input;
let count = 0
for (char of alphabet) {
    while(arr.includes(char)) {
        arr = arr.replace(char, ' ');
        count++;
    }
}
count += arr.replace(/\s/g, '').length;

console.log(count);