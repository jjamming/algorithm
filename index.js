const visited = Array(10).fill(false);  // 방문 여부 배열 초기화
let count = 0;  // 방문한 노드의 수를 세는 변수

const dfs = (x) => {
  console.log(`Visiting node: ${x}`);  // 현재 방문한 노드 출력
  visited[x] = true;  // 현재 노드 방문 처리
  count++;  // 방문한 노드 수 증가
  //console.log(`Visited nodes count: ${count}`);  // 방문한 노드 수 출력

  for (let y of graph[x]) {
    if (!visited[y]) {
      console.log(`Going to node: ${y}`);  // 다음으로 이동할 노드 출력
      dfs(y);  // 재귀적으로 DFS 호출
    }
  }
}

const graph = [
  [1, 2],       // 0번 정점: 1, 2번 정점과 연결
  [0, 2, 3, 4], // 1번 정점: 0, 2, 3, 4번 정점과 연결
  [0, 1, 4, 5], // 2번 정점: 0, 1, 4, 5번 정점과 연결
  [1, 6],       // 3번 정점: 1, 6번 정점과 연결
  [1, 2, 6],    // 4번 정점: 1, 2, 6번 정점과 연결
  [2, 7],       // 5번 정점: 2, 7번 정점과 연결
  [3, 4, 8],    // 6번 정점: 3, 4, 8번 정점과 연결
  [5, 8],       // 7번 정점: 5, 8번 정점과 연결
  [6, 7, 9],    // 8번 정점: 6, 7, 9번 정점과 연결
  [8]           // 9번 정점: 8번 정점과 연결
];

// DFS 시작
dfs(0);