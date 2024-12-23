const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim();

let num = [];

const oper = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] === "+" || input[i] === "-") {
    oper.push(input[i]);
  }
}
num = input.replace(/[+-]/g, " ").split(" ").map(Number);
let ans = num[0];
const first_minus = oper.indexOf("-");

for (let i = 1; i < num.length; i++) {
  if (first_minus !== -1 && first_minus + 1 <= i) {
    ans -= num[i];
  } else {
    ans += num[i];
  }
}

console.log(ans);
