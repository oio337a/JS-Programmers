const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, type] = input[0].split(' ');
N = parseInt(N);

const players = input.slice(1).filter(Boolean);
const uniquePlayers = new Set(players).size;

let groupSize = 1;
if (type === 'F') groupSize = 2;
if (type === 'O') groupSize = 3;

console.log(Math.floor(uniquePlayers / groupSize));
