const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split("\n").map(element => element.trim());
const length = input.shift();
const arr = [...new Set(input)];
arr.sort((a, b) => {
    if (a.length === b.length) return a.localeCompare(b);
    return a.length - b.length;
})
console.log(arr.join("\n"));