const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, K] = input.shift().trim().split(" ").map(Number);
const arr = input.map((el) => +el.trim());

let index = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= K) index = i;
}

let ans = 0;

while (K) {
    ans += Math.floor(K / arr[index]);
    K = K % arr[index--];
}

console.log(ans);
