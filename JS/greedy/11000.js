const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

const length = input.shift();
const grid = [];
for (const el of input) {
  grid.push([el[0], 1]);
  grid.push([el[1], -1]);
}
grid.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});
let cur = 0;
let ans = -Infinity;
for (el of grid) {
  if (el[1] === 1) {
    cur++;
    ans = ans < cur ? cur : ans;
  } else {
    cur--;
  }
}

console.log(ans);
