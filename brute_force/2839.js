const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim();

let result = -1;
let five = Math.floor(input / 5);
while (five >= 0) {
  let three = input - five * 5;
  if (three % 3 === 0) {
    result = five + three / 3;
    break;
  } else {
    five -= 1;
  }
}
console.log(result);
