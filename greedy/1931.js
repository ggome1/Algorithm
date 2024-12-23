const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

const length = input.shift();
let ans = 1;
input.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});
let [start, end] = input.shift();


for (el of input) {
  if (el[0] >= end) {
    ans++;
    [start, end] = [el[0], el[1]];
  }
}

console.log(ans);
