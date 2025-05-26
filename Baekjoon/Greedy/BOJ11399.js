// ATM #11399, Greedy
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let n = input[0];
let arr = input[1].split(" ").map(Number);

arr.sort((a,b)=>a-b);

let sum = 0;
let tmp = 0;
for(let i =0 ; i<arr.length; i++){
  tmp += arr[i];
  sum += tmp;
}
console.log(sum);