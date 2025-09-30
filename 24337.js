const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n');

const [N, a, b] = input[0].split(' ').map(Number);

if (a + b - 1 > N) {
  console.log(-1);
} else {
  const result = [];
  const fillersCount = N - (a + b - 1);

  if (a > 1) {
    // Case 1: a > 1
    // [1, (fillers), 2...a-1, peak, b-1...1]
    result.push(1);
    for (let i = 0; i < fillersCount; i++) {
      result.push(1);
    }
    for (let i = 2; i < a; i++) {
      result.push(i);
    }
    result.push(Math.max(a, b));
    for (let i = b - 1; i >= 1; i--) {
      result.push(i);
    }
  } else { // a === 1
    // Case 2: a = 1
    // [peak, (fillers), b-1...1]
    result.push(Math.max(a, b)); // a=1이므로 max(1,b) = b
    for (let i = 0; i < fillersCount; i++) {
      result.push(1);
    }
    for (let i = b - 1; i >= 1; i--) {
      result.push(i);
    }
  }
  
  console.log(result.join(' '));
}