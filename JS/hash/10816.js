const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));
const N = input.shift()[0];
const arr_N = input.shift();
const M = input.shift()[0];
const arr_M = input.shift();

const map = new Map(arr_M.map((el) => [el, 0]));

for (el of arr_N) {
  if (map.has(el)) {
    map.set(el, map.get(el) + 1);
  }
}

console.log(Array.from(map.values()).join(" "));
