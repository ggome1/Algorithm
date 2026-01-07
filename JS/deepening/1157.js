const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim();
const count = {}
const arr = input.toLowerCase()

for (let i = 0; i < arr.length; i++) {
    const char = arr[i]; // 현재 문자
    if (count[char]) {
        count[char]++; // 기존 키 값 증가
    } else {
        count[char] = 1; // 새로운 키 추가
    }
}

let result = [];
let max = 0;

for (const char in count) {
    if (count[char] > max) {
        result = [char];
        max = count[char];
    } else if (count[char] === max){
        result = [...result, char]
    }
}

if (result.length === 1) {
    console.log(result.toString().toUpperCase());
} else {
    console.log('?')
}