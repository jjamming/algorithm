// 나무자르기 #2805, 이진탐색
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [n, goal] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

// 가져가는 나무 길이(개당) = 나무 높이 - 톱 높이
let result = 0; // 가져가는 나무의 총 합이 n보다 큰 가장 작은 정수일 때의 "톱 높이"
let start = 1;
let end = arr.reduce((a,b)=>Math.max(a,b)); // 가장 길이가 긴 나무

while(start <= end){
  let mid = parseInt((start + end) / 2); // mid == 톱 높이
  let total = 0; // 현재까지의 나무 길이
  // Idea: 톱 높이를 나무 길이에서 조정하며 가져가는 나무의 총 길이를 비교. 목표치보다 작다면 톱을 좀 더 짧게 해서 나무를 더 가져가게함
  for(tree of arr){
    if(tree > mid){
      total += (tree - mid); // 자른 만큼 더함
    }
  }
  if(total < goal){ // 목표보다 적다면 톱을 좀 더 낮게 설정해서 다시 잘라
    end = mid -1;
  } else{ // 목표보다 크다면 현재 톱의 길이를 결과에 저장 후 톱을 좀 더 높게 해서 시도
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
