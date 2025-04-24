// 바이러스 #2606, DFS
let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let node = Number(input[0]);
let edge = Number(input[1]);

let graph = [];
for(let i = 1; i<=node;  i++) graph[i]=[];
for(let i = 0; i<edge; i++){
  let [first, second] = input[i+2].split(" ").map(Number);
  graph[first].push(second);
  graph[second].push(first);
}

let visited = new Array(node+1).fill(false);
let count = 0;

const dfs = (x) => {
  visited[x] = true;
  count++;
  for(y of graph[x]){
    if(!visited[y]) dfs(y);
  }
}

dfs(1);
console.log(count -1);