const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split("\n").map(element => element.trim().split(" ").map(Number));

const length = input.shift();
input.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
});
console.log(input.map(element => element.join(" ")).join("\n"));