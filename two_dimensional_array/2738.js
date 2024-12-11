const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split("\n").map(element => element.split(" ").map(Number));
const [N, M] = input.shift();

let two_dim_arr = new Array(N).fill().map(() => new Array(M).fill(0));
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        two_dim_arr[i][j] = input[i][j] + input[i + N][j];
    }
}

const result = two_dim_arr.map(element => element.join(" ")).join("\n").trim();
console.log(result)
