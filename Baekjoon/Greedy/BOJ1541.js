// 잃어버린 괄호 #1541, Greedy
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let arr = input[0].split("-");
let answer = 0;

for(let i =0; i<arr.length; i++){
  let sumTmp = arr[i].split("+").map(Number).reduce((a,b)=>a+b);
  if(i === 0) answer += sumTmp;
  else{
    answer -= sumTmp;
  }
}

console.log(answer);