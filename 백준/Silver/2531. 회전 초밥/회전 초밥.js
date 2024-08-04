/**
 * 회전 초밥
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, d, k, c] = input[0].split(' ').map(Number);
const sushi = input.slice(1).map(Number);

function getMaxSushiTypes() {
  const count = new Array(d + 1).fill(0);
  let uniqueSushiCount = 0;

  for (let i = 0; i < k; i++) {
    if (count[sushi[i]] === 0) uniqueSushiCount++;
    count[sushi[i]]++;
  }

  let maxSushiTypes = uniqueSushiCount;
  if (count[c] === 0) maxSushiTypes++;

  // Sliding window
  for (let i = 0; i < n; i++) {
    const removeIdx = i;
    const addIdx = (i + k) % n;

    if (--count[sushi[removeIdx]] === 0) uniqueSushiCount--;
    if (count[sushi[addIdx]]++ === 0) uniqueSushiCount++;

    let currentMax = uniqueSushiCount;
    if (count[c] === 0) currentMax++;

    maxSushiTypes = Math.max(maxSushiTypes, currentMax);
  }

  return maxSushiTypes;
}

console.log(getMaxSushiTypes());
