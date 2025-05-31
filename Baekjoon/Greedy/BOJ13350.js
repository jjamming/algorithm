// 주유소 #13350, Greedy
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let city = Number(input[0]);
let distance=input[1].split(" ").map(Number);;
let price=input[2].split(" ").map(Number);

// 현재 최소 기름값 < 다음 위치 기름값 ? 가격 = 현재 최소 값 * 현재-다음 거리. : 가격 =  현재 최소 값 * 현재-다음 거리. 현재최소값 갱신
// 필요한 변수 : 현재 제일 낮은 기름값. 현재까지 기름값
let minPrice = price[0];
let currentPrice = BigInt(0);


for(let i = 1; i<city; i++){ // 각 위치 쭉 진행
  currentPrice += BigInt(minPrice) * BigInt(distance[i-1]); // 다음 거리까지 가격 계산
  if(minPrice > BigInt(price[i])){
    minPrice = BigInt(price[i]); // 다음 기름값이 더 싸다면 최소 기름값 갱신
  }
}

console.log(String(currentPrice)); // BigInt에서 뒤에 붙는 n 제외

