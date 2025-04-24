// 유기농 배추 #1202, DFS
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const dfs = (farm, n, m, x, y) => {
  if(x < 0 || x >= n || y >= m || y < 0) return false;
  if(farm[x][y] == 1){
    farm[x][y] = -1;
    dfs(farm,n,m,x-1,y);
    dfs(farm,n,m,x+1,y);
    dfs(farm,n,m,x,y-1);
    dfs(farm,n,m,x,y+1);
    return true;
  };
  return false;
}

let count = Number(input[0]);
let line = 1;
for(let c = 0; c<count; c++){
  let [m, n, cabbage] = input[line].split(" ").map(Number);
  let farm = [];
  for(let i = 0; i<n; i++){
    farm[i] = new Array(m);
  }
  for(let i = 1 ; i<=cabbage; i++){
    let [y,x] = input[line+i].split(" ").map(Number);
    farm[x][y] = 1;
  }
  let answer = 0;
  for(let i = 0; i<n; i++){
    for(let j =0; j<m; j++){
      if(dfs(farm,n,m,i,j)) answer++;
    }
  }
  line += cabbage + 1;
  console.log(answer);
}