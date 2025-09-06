const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = Number(input[0]);

function evaluate(expr) {
  // 공백 제거 후 숫자 이어붙이기 처리
  const noSpace = expr.replace(/ /g, "");
  // 수식 계산 (eval 사용 대신 안전하게 파싱)
  let sum = 0;
  let num = "";
  let sign = 1;
  for (let i = 0; i < noSpace.length; i++) {
    const ch = noSpace[i];
    if (ch === "+" || ch === "-") {
      sum += sign * Number(num);
      num = "";
      sign = ch === "+" ? 1 : -1;
    } else {
      num += ch;
    }
  }
  sum += sign * Number(num);
  return sum;
}

function dfs(n, cur, idx, results) {
  if (idx > n) {
    if (evaluate(cur) === 0) {
      results.push(cur);
    }
    return;
  }

  dfs(n, cur + " " + idx, idx + 1, results);
  dfs(n, cur + "+" + idx, idx + 1, results);
  dfs(n, cur + "-" + idx, idx + 1, results);
}

let line = 1;
let output = [];
for (let t = 0; t < T; t++) {
  const n = Number(input[line++]);
  const results = [];
  dfs(n, "1", 2, results);
  output.push(results.join("\n"));
}
console.log(output.join("\n\n"));
