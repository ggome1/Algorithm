const findMaxNumber = (arr) => arr.reduce(
    (prev, curr, index) => curr > prev.maxNum ? { maxNum: curr, index } : prev, { maxNum: -Infinity }
)
const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split('\n').map(element => findMaxNumber(element.split(" ").map(Number)));
const result = findMaxNumber(input.map(element => element.maxNum));
console.log(`${result.maxNum}\n${result.index + 1} ${input[result.index].index + 1}`)



