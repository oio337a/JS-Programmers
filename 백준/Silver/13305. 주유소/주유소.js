const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const distances = input[1].split(' ').map(BigInt);
const prices = input[2].split(' ').map(BigInt);

let totalCost = 0n;
let minPrice = prices[0];

for (let i = 0; i < N - 1; i++) {
  if (prices[i] < minPrice) {
    minPrice = prices[i];
  }

  totalCost += distances[i] * minPrice;
}

console.log(totalCost.toString());