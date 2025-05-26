// 나이순 정렬 #10814, 정렬
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let infoArr = [];
let answer = "";

for(let i = 1; i<=n; i++){
  let [age, name] = input[i].split(" ");
  infoArr.push([Number(age),name]);
}

let sorted = infoArr.sort((a,b)=>{
  if(a[0] === b[0]){
    return 0;
  } else return a[0]-b[0];
})

for(let i = 0; i<sorted.length; i++){
  answer = answer + sorted[i][0] + " " + sorted[i][1] + "\n";
}

console.log(answer);