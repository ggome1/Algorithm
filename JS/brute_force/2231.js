const input = +require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim();

let result = 0;

for (let i = 1; i < input; i++) {
    let sum = i;
    let num = i;
    while(num) {
        sum += num % 10;
        num = parseInt(num / 10);
    }
    if (sum === input) {
        result = i;
        break;
    }
}
console.log(result);