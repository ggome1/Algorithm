const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((element) => element.trim().split(" ").map(Number));

const length = input.shift();
let count = 0;

const arr = Array.from({length: 100}, () => Array(100).fill(0));

for (element of input) {
    for (let i = element[0]; i < element[0] + 10; i++) {
        for (let j = element[1]; j < element[1] + 10; j++) {
            if (arr[i][j] !== 0) continue;
            arr[i][j] = 1;
            count++
        }
    }
}

console.log(count);
