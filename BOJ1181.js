// 단어 정렬 #1181, 정렬
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let arr = [];

for(let i = 1; i<=n; i++){
  arr.push(input[i]);
}

arr = [...new Set(arr)]; // 중복을 제거하기 위해 집합에 넣었다가 다시 배열로 복귀

arr.sort((a,b)=>{
  if(a.length !== b.length){
    return a.length - b.length;
  } else{
    if(a<b) return -1;
    else if(a>b) return 1;
    else return 0;
  }
})

for(let i = 0; i<arr.length; i++){
  console.log(arr[i]);
}