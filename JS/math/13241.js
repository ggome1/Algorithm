const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split(" ").map(Number);

input.sort((a, b) => a - b);
const gcd = (a, b) => {
    let lea = a % b;
    if (lea === 0) return b;
    return (gcd(b, lea))
}

console.log(input[0] * input[1] / gcd(input[0], input[1]));