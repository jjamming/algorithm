// A->B #16953, Greedy
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [a,b] = input[0].split(" ").map(Number);

let count = 1;
let flag = false;
while(a<=b){
  if(a==b){ // a와 b가 같으면 해결된 것
    flag = true;
    console.log(count);
    break;
  };

  if(b % 2 == 0){ // b가 짝수라면 -> / 2 하고 다시 ㄱ ㄱ
    b = parseInt(b / 2);
    count++;
    continue;
  } else if(b % 10 == 1){ // b가 1으로 끝나면 -> 우측 1을 하나 떼고 다시 ㄱㄱ
    b = parseInt(b / 10);
    count++;
    continue;
  } else break;
}


if(!flag){
  console.log(-1);
}