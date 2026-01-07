const [a, b, c, d, e, f] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(
  (c * e - f * b) / (a * e - d * b) + " " + (c * d - f * a) / (b * d - e * a)
);
