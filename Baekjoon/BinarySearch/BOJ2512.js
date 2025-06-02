// 예산 #2512, 이진탐색
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let budget = Number(input[2]);

// 예산을 범위로 잡고, 상한액을 이진탐색으로 조정하며 예산 배정

let result = 0 ; // 정답(최대로 배정할 수 있는 예산)

let start = 1;
let end = arr.reduce((a,b)=>Math.max(a,b)); // 가장 큰 예산을 제출한 지역의 금액

while(start <= end){
  let total = 0;
  let mid = parseInt((start + end) / 2); // 상한액
  for(x of arr){
    if(x >= mid){ // 현재 지역의 예산이 상한액보다 크거나 같다면 상한액을 넣음
      total += mid;
    } else { // 그렇지 않으면 지금 지역 예산 넣음
      total += x;
    }
  }
  if(total > budget){ // 현재 상한액 기준으로 각 지역 예산 처리 시 금액이 나라 예산보다 크다면 상한액을 줄여야함
    end = mid - 1;
  } else  {// if(total <= budget) // 나라 예산보다 작거나 같다면? 가능. 하지만 최대한 큰 수를 찾기 위해 상한액을 올려서 다시 반복
    result = mid; // 현재까지 제일 많이 사용하는 예산 기록용
    start = mid + 1;
  }
}

console.log(result);