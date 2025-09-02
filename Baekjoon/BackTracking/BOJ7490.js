// 0 만들기 #7490, BackTracking
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const caseCount = Number(input[0]);

let n = 0;
let arr = [];
let signArr = [" ", "+", "-"];
let selectedSign = [];

const dfs = (depth, selectedSign) => {
  if (depth === n - 1) {
    let answer = "";
    for (let j = 0; j < n - 1; j++) {
      answer += arr[j] + selectedSign[j];
    }
    answer += arr[n - 1].toString();
    const total = eval(answer.split(" ").join(""));
    if (total === 0) console.log(answer);
    return;
  }

  for (let x of signArr) {
    selectedSign.push(x);
    dfs(depth + 1, selectedSign);
    selectedSign.pop();
  }
};

for (let i = 1; i <= caseCount; i++) {
  if (i !== 1) console.log("");
  n = input[i];
  arr = [];
  for (let j = 1; j <= n; j++) {
    arr.push(j);
  }
  dfs(0, selectedSign);
}
