const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split("\n").map(element => element.trim().split(" ").map(Number));

const length = input.shift();
const arr = Array.from(new Set(input[0]))
const sorted_arr = [...arr].sort((a, b) => a - b);
const dict = {}
sorted_arr.forEach((el, index) => dict[el] = index);
const result = []
for (let i = 0; i < length; i++) {
    result.push(dict[input[0][i]])
}
console.log(result.join(" "));