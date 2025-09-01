// 모든 순열 #10974, BackTracking
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let visited = new Array(n).fill(false);
let selected = [];

let answer = "";

const dfs = (arr, depth) => {
  if (n === depth) {
    for (let i = 0; i < depth; i++) {
      answer += selected[i] + " ";
    }
    answer += "\n";
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(arr[i]);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
};

dfs(arr, 0);
console.log(answer);
