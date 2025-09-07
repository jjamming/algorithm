// 텀 프로젝트 #9466, dfs
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const testCase = Number(input[0]);

let line = 1;

for (let i = 0; i < testCase; i++) {
  const n = Number(input[line]);
  const wantArr = [0, ...input[line + 1].split(" ").map(Number)];

  const state = new Array(n + 1).fill(0); // 0: 미방문, 1: 방문중, 2: 방문완료
  let teamCount = 0;

  function dfs(x) {
    state[x] = 1; // 방문중
    const next = wantArr[x];

    if (state[next] === 0) {
      dfs(next);
    } else if (state[next] === 1) {
      // 자기 자신이거나, 사이클 형성이거나
      let current = next;
      let length = 0;
      do {
        length++;
        current = wantArr[current];
      } while (current !== next);
      teamCount += length;
    }
    state[x] = 2;
  }

  for (let j = 1; j <= n; j++) {
    if (state[j] === 0) dfs(j);
  }

  console.log(n - teamCount);

  line += 2;
}
