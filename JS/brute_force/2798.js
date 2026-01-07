const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((element) => element.trim().split(" ").map(Number));

const [N, M] = input.shift();
const arr = input.shift();
let result = -Infinity;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let z = j + 1; z < N; z++) {
        const sum = arr[i] + arr[j] + arr[z];
        if (sum > result && sum <= M) {
            result = sum;
        }
    }
  }
}
console.log(result);
