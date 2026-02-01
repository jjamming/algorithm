// 내려가기 #2096 - 메모리초과(js로 못푸는 문제)
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0;
let lineIdx = 0;

let min0 = 0,
  min1 = 0,
  min2 = 0;
let max0 = 0,
  max1 = 0,
  max2 = 0;

rl.on("line", (line) => {
  if (lineIdx === 0) {
    N = Number(line);
    lineIdx++;
    return;
  }

  const [a, b, c] = line.split(" ").map(Number);

  if (lineIdx === 1) {
    min0 = max0 = a;
    min1 = max1 = b;
    min2 = max2 = c;
  } else {
    const nMin0 = Math.min(min0, min1) + a;
    const nMin1 = Math.min(min0, min1, min2) + b;
    const nMin2 = Math.min(min1, min2) + c;

    const nMax0 = Math.max(max0, max1) + a;
    const nMax1 = Math.max(max0, max1, max2) + b;
    const nMax2 = Math.max(max1, max2) + c;

    min0 = nMin0;
    min1 = nMin1;
    min2 = nMin2;

    max0 = nMax0;
    max1 = nMax1;
    max2 = nMax2;
  }

  lineIdx++;

  if (lineIdx > N) rl.close();
});

rl.on("close", () => {
  const min = Math.min(min0, min1, min2);
  const max = Math.max(max0, max1, max2);
  console.log(max + " " + min);
});
