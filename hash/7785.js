const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt').toString().trim().split("\n").map(el => el.trim().split(" "))
const length = +input.shift()

let company = new Map(input.map((el) => [el[0], el[1]]));
let result = []
for (let key of company.keys()) {
	if (company.get(key) !== "leave") result.push(key);
}
console.log(result.sort().reverse().join("\n"));
