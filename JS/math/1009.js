const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split("\n");

const length = input.shift();

for (let i = 0; i < length; i++) {
    const split = input[i].split(" ")
    const a = Number(split[0]);
    const b = Number(split[1]);
    const pattern = [a % 10];
    if (a % 10 === 0) {
        console.log(10)
    }
    else if (b === 1) {
        console.log(a % 10);
    }
    else {
        for (let j = 2; j <= b; j++) {
            const pow = Math.pow(a, j) % 10;
            if (pow === pattern[0]) {
                break;
            } else {
                pattern.push(pow)
            }
        }
        const pl = pattern.length
        console.log(pattern.at(b % pl - 1))
    }
}