// 수들의 합 #1789, Greedy
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let count = 0;
for(let i =1; i<=n; i++){
  if(n<=0){
    break;
  } else{
    n -= i;
  }
}

console.log(count);
