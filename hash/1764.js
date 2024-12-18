const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n").map(el => el.trim());
const [N, M] = input.shift().split(" ");
const arr_N = input.slice(0, N);
const arr_M = input.slice(N);
const answer = [];

const map = new Map(arr_N.map((el) => [el, 1]));

arr_M.map(el => {
    map.has(el) && answer.push(el);
})

console.log(answer.length + "\n" + answer.sort().join("\n"));