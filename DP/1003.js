const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split("\n");

const len = Number(input.shift());

for (let i = 0; i < len; i++) {
    const n = Number(input[i]);
    const fibonacci = [[1, 0], [0, 1]];
    for (let j = 2; j <= n; j++) {
        fibonacci[j] = [
            fibonacci[j-1][0] + fibonacci[j-2][0], 
            fibonacci[j-1][1] + fibonacci[j-2][1]
        ];
    }
    console.log(fibonacci[n].join(" "));
}
