const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((element) => element.split(" ").map(Number));
const [n, k] = input.shift();
const arr = input.shift().sort((a, b) => b - a);
console.log(arr[k - 1]);
