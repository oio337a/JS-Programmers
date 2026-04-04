const fs = require("fs");
let [N, list, M, ...ranges] = fs.readFileSync("test.txt").toString().trim().split("\r\n");

N = Number(N);
M = Number(M);
list = list.split(' ').map(Number);
ranges = ranges.map(item => item.split(' ').map(Number));

const prefix = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
    prefix[i] = prefix[i - 1] + list[i - 1];
}

let output = [];
for (const [s, e] of ranges) {
    output.push(prefix[e] - prefix[s - 1]);
}

console.log(output.join("\n"));