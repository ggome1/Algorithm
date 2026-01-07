const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()

let [num, count] = [666, 1];

while (count !== input) {
  num++;
  if (num.toString().trim().includes("666")) {
    count++;
  }
}

console.log(num);
