const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const items = input.slice(1).map(line => line.split(" ").map(Number));

// dp[i] = 무게 i까지 담을 수 있는 최대 가치
const dp = new Array(K + 1).fill(0);

for (let i = 0; i < N; i++) {
  const [W, V] = items[i];
  for (let j = K; j >= W; j--) {
    dp[j] = Math.max(dp[j], dp[j - W] + V);
  }
}

console.log(dp[K]);

/**
 * 2차원 배열 풀이
 */
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const [N, K] = input[0].split(" ").map(Number);
// const items = input.slice(1).map(line => line.split(" ").map(Number));

// // dp[i][j] = i번째 아이템까지 고려했을 때, 무게 j까지 담을 수 있는 최대 가치
// const dp = Array.from({ length: N + 1 }, () => new Array(K + 1).fill(0));

// for (let i = 1; i <= N; i++) {
//   const [W, V] = items[i - 1];
//   for (let j = 1; j <= K; j++) {
//     if (j < W) {
//       // 현재 무게 j가 아이템 W보다 작으면 담을 수 없음
//       dp[i][j] = dp[i - 1][j];
//     } else {
//       // 담지 않는 경우 vs 담는 경우 중 최대값
//       dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - W] + V);
//     }
//   }
// }

// console.log(dp[N][K]);


/**
 * 재귀 + 메모이제이션 풀이
 */
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const [N, K] = input[0].split(" ").map(Number);
// const items = input.slice(1).map(line => line.split(" ").map(Number));

// // memo[i][w] = i번째 아이템부터 고려했을 때, 남은 무게 w로 얻을 수 있는 최대 가치
// const memo = Array.from({ length: N }, () => new Array(K + 1).fill(-1));

// function knapsack(index, weight) {
//   // 더 이상 고려할 아이템이 없거나 무게가 0이면 가치 0
//   if (index === N || weight === 0) return 0;

//   // 이미 계산한 값이면 반환
//   if (memo[index][weight] !== -1) return memo[index][weight];

//   const [W, V] = items[index];

//   // 담을 수 없는 경우 → 다음 아이템으로 넘어감
//   if (W > weight) {
//     memo[index][weight] = knapsack(index + 1, weight);
//   } else {
//     // 담지 않는 경우 vs 담는 경우 중 최대값
//     const skip = knapsack(index + 1, weight);
//     const take = knapsack(index + 1, weight - W) + V;
//     memo[index][weight] = Math.max(skip, take);
//   }

//   return memo[index][weight];
// }

// console.log(knapsack(0, K));