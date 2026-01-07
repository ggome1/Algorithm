const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split("\n").map(el => el.trim().split(" ").map(Number));

const [num1, den1] = input.shift();
const [num2, den2] = input.shift();

const gcd = (a, b) => {
    let lea = a % b;
    if (lea === 0) return b;
    return (gcd(b, lea))
}

const den = den1 * den2 / gcd(den1, den2);
const num = (num1 * (den / den1)) + (num2 * (den / den2));
const res_gcd = gcd(num, den);
console.log(num / res_gcd + " " + den / res_gcd);