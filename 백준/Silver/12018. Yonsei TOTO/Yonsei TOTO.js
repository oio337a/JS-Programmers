const fs = require('fs');
// On Baekjoon, use '/dev/stdin'
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const requiredMileage = [];

for (let i = 1; i <= n; i++) {
    const [P, L] = input[i * 2 - 1].split(' ').map(Number);
    const mileages = input[i * 2].split(' ').map(Number);

    if (P < L) {
        // Not enough applicants, bid the minimum
        requiredMileage.push(1);
    } else {
        // Sort bids to find the cutoff
        mileages.sort((a, b) => b - a); // Sort descending
        const cutoff = mileages[L - 1];
        requiredMileage.push(cutoff);
    }
}

// Sort the costs for each class in ascending order
requiredMileage.sort((a, b) => a - b);

let totalMileage = m;
let count = 0;

// Enroll in the cheapest classes first
for (const mileage of requiredMileage) {
    if (totalMileage >= mileage) {
        totalMileage -= mileage;
        count++;
    } else {
        break; // Can't afford the next cheapest class
    }
}

console.log(count);