// 설탕배달 #2839, Greedy
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let flag = false;
let count = 0;

while(n>=0){
  if(n == 0 || n % 5 == 0){
    count += parseInt(n / 5);
    console.log(count);
    flag = true;
    break;
  }
  n -= 3;
  count++;
};

if(!flag){
  console.log(-1);
}
