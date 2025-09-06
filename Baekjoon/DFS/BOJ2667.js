// 단지번호붙이기 #2667, dfs
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
let arr = [];
let visited = [];
let total = 0;
let count = 0;
let countArr = [];
let answer = "";

for (let i = 0; i < n; i++) {
  let line = input[i + 1].split("").map(Number);
  arr.push(line);
  visited.push(new Array(n).fill(false));
}

function dfs(arr, visited, x, y, isStart) {
  if (x < 0 || y < 0 || x >= n || y >= n) {
    return;
  }

  if (arr[x][y] == 1 && !visited[x][y]) {
    if (isStart) total++;
    visited[x][y] = true;
    count++;

    dfs(arr, visited, x, y + 1, false);
    dfs(arr, visited, x + 1, y, false);
    dfs(arr, visited, x, y - 1, false);
    dfs(arr, visited, x - 1, y, false);
    return;
  }
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    count = 0;
    dfs(arr, visited, i, j, true);
    if (count !== 0) countArr.push(count);
  }
}
countArr.sort((a, b) => a - b);
answer += total;
for (let i in countArr) answer += "\n" + countArr[i];

console.log(answer);
