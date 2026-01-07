const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const length = input.shift()[0];
const arr = input.shift();

let ans = 0;
let sum = 0;
arr.sort((a, b) => a - b);

for (el of arr) {
    ans = ans + el;
    sum += ans;
}

console.log(sum);
