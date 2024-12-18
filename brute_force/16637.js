const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split("\n");
const N = +input.shift().toString();
const arr = input[0].trim().split("");
const num = [];
const oper = [];

let answer = -Infinity;

const calculator = (a, oper, b) => {
    let cur;
    switch(oper) {
        case "+" :
            return a + b;
        case "-" :
            return a - b;
        case "*" :
            return a * b;
        default : return;
    }
}

for (let i = 0; i < N; i++) {
    if (i % 2 == 0) {
        num.push(+arr[i])
    } else {
        oper.push(arr[i]);
    }
}

const dfs = (result, index) => {
    if (index >= num.length - 1) {
        answer = Math.max(answer, result);
        return ;
    }
    dfs(calculator(result, oper[index], num[index + 1]), index + 1);
    if (index + 2 < num.length) {
        dfs(calculator(result, oper[index], calculator(num[index + 1], oper[index + 1], num[index + 2])), index + 2);
    }
}

dfs(num[0], 0)

console.log(answer);