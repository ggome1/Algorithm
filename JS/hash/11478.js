const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim();

let ans = new Set();
const length = input.length;

for (let i = 0; i < length; i++) {
  for (let j = 0; j < length - i; j++) {
    const part = input.substring(j, j + i + 1);
    ans.add(part);
  }
}
console.log(ans.size);
