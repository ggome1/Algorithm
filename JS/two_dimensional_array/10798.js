const length = [];
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((element) => {
    const el = element.trim().split("");
    length.push(el.length);
    return el;
  });

const result = [];

for (let i = 0; i < Math.max(...length); i++) {
  for (let j = 0; j < input.length; j++) {
    if (length[j] > i) {
      result.push(input[j][i]);
    }
  }
}

console.log(result.join("").trim());
