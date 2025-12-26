//평범한 배낭 #12865
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);

const items = [];
const dp = Array(K + 1).fill(0);

for (let i = 1; i <= N; i++) {
  items.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < N; i++) {
  let [weight, value] = items[i];
  for (let j = K; j >= weight; j--) {
    dp[j] = Math.max(dp[j], dp[j - weight] + value);
  }
}

console.log(dp[K]);
