const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split("\n").map(el => el.trim());

const [N, M] = input.shift().split(" ").map(Number);

const poketmons = input.slice(0, N);
const questions = input.slice(N);

const map = new Map(poketmons.map((poketmon, index) => [poketmon, index + 1]));
questions.forEach(question => {
    if (Number.isNaN(+question)) console.log(map.get(question));
    else console.log(poketmons[+question - 1]);
})