const { join } = require("path");

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
    .toString()
    .trim()
    .split("\n").map(element => element.trim());

const [N, M] = input.shift().split(" ");
const white_start = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
];

const black_start = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
];

const find_arr = (n, m) => {
    let white_count = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (input[i + n][j + m] !== white_start[i][j]) white_count++;
        }
    }
    let black_count = 0;
    for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if (input[i + n][j + m] !== black_start[i][j]) black_count++;
    }
    }
    return Math.min(white_count, black_count);
};

let min_count = Infinity;

for (let i = 0; i < N - 7; i++) {
    for (let j = 0; j < M - 7; j++) {
        const result = find_arr(i, j);
        if (result < min_count) min_count = result
    }
}

console.log(min_count);