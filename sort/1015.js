const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split("\n");

const length = input.shift();

const arr_p = input[0].split(" ")
const arr_b = [...arr_p].sort((a, b) => a - b)

const result = [];
for (let i = 0; i < length; i++) {
    const index = arr_b.indexOf(arr_p[i]);
    arr_b[index] = -1;
    result.push(index);
}

console.log(result.join(" "))
