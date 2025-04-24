// 노드사이의 거리 #1240, dfs
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let nodes = [];
let visited = new Array(n+1).fill(false);
let answer = 0;

const dfs = (start, end, distance) => {
  if(visited[start]) return;
  visited[start] = true;
  
  if(start === end) {
    answer = distance;
    return;
  }

  for(let i = 1; i<=n; i++){
    if(nodes[start][i] === -1) continue;
    dfs(i,end,distance + nodes[start][i]);
  }
}

for(let i = 1; i<=n; i++){
  nodes[i] = new Array(n+1).fill(-1);
}

for(let i = 1; i<n; i++){
  let [node1, node2, d] = input[i].split(" ").map(Number);
  nodes[node1][node2] = d;
  nodes[node2][node1] = d;
}

for(let i = n; i<n+m; i++){
  let [start, end] = input[i].split(" ").map(Number);
  dfs(start, end, 0);
  visited = new Array(n+1).fill(false);

  console.log(answer);
}

