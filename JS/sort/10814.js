const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((element) => element.split(" ").map((el) => el.trim()));
const length = input.shift();
console.log(input.sort((a, b) => Number(a[0]) - Number(b[0])).map(el => el.join(" ")).join("\n"));
