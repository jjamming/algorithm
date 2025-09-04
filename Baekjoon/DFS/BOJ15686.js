// 치킨 배달 #15686, dfs
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let home = [];
let chicken = [];
let selectedChicken = [];
let distance = 0;

for (let i = 0; i < n; i++) {
  let line = input[i + 1].split(" ").map(Number);
  for (let j = 0; j < n; j++) {
    if (line[j] == 1) home.push([i, j]);
    if (line[j] == 2) chicken.push([i, j]);
  }
}

const dfs = (arr, depth) => {
  if (depth == m) {
    // 집 돌면서 치킨 거리 측정
    let tmpDistanceforCity = 0; // 치킨 거리
    for (let [hx, hy] of home) {
      let tmpDistanceforHome = 0;
      for (let [cx, cy] of selectedChicken) {
        // 해당 집에서 제일 가까운 치킨집 거리를 찾아서 tmpDistance에 더해야함
        let current = Math.abs(hx - cx) + Math.abs(hy - cy);
        if (tmpDistanceforHome === 0 || current < tmpDistanceforHome)
          tmpDistanceforHome = current;
      }
      tmpDistanceforCity += tmpDistanceforHome;
    }

    // 이전 치킨거리보다 작으면 갱신
    if (distance == 0 || tmpDistanceforCity < distance)
      distance = tmpDistanceforCity;
    return;
  }
  for (let x = 0; x < arr.length; x++) {
    selectedChicken.push(arr[x]);
    dfs(arr.slice(x + 1, arr.length), depth + 1);
    selectedChicken.pop();
  }
};

dfs(chicken, 0);
console.log(distance);
