const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim();

let divide_5 = Math.floor(input / 5);
while (divide_5) {
  let divide_3 = input - 5 * divide_5;
  if (divide_3 % 3 === 0) {
    console.log(divide_5 + divide_3 / 3);
    return ;
  }
  divide_5--;
}
if (input % 3 === 0) {
  console.log(input / 3);
} else {
  console.log(-1);
}
