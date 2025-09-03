// N과 M(2) #15650, BackTracking
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let selected = [];
let answer = "";

const dfs = (arr, depth) => {
  if (depth === m) {
    for (let i in selected) {
      answer += selected[i] + " ";
    }
    answer += "\n";
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    selected.push(arr[i]);
    dfs(arr.slice(i + 1, arr.length), depth + 1);
    selected.pop();
  }
};

dfs(arr, 0);
console.log(answer);
