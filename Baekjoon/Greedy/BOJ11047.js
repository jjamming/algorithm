// 동전0 #11047, Greedy
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [coin, value] = input[0].split(" ").map(Number);

let coinArr = [];
let count = 0;
for(let i = 1 ; i<=coin; i++){
  coinArr.push(Number(input[i]));
};

let i = coinArr.length-1;

while(value !== 0 && i>=0){
  if(coinArr[i] > value){
    i--;
    continue;
  } else {
    value -= coinArr[i];
    count++;
  }
}

console.log(count);