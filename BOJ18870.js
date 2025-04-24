// 좌표 압축 #18870, 정렬
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let noDupArr = [...new Set(arr)];

let sorted = noDupArr.sort((a,b)=>a-b);

let myMap = new Map();
for(let i = 0; i < sorted.length; i++){
  myMap.set(sorted[i],i);
}

// 시간초과 : O(n^2)복잡도임
// for(let i = 0; i<n; i++){
//   for(let j = 0; j<sorted.length; j++){
//     if(arr[i] === sorted[j]){
//       answer = answer + j + " ";
//     }
//   }
// }

let answer = ""
for(x of arr) {
  answer += myMap.get(x) + " ";
}
console.log(answer);