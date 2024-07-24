const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

class Gear {
  constructor(teeth) {
    this.teeth = teeth;
  }

  rotateClockwise() {
    this.teeth.unshift(this.teeth.pop());
  }

  rotateCounterClockwise() {
    this.teeth.push(this.teeth.shift());
  }
}

const gears = input.slice(0, 4).map(line => new Gear(line.split('')));
const orders = input.slice(5).map(order => order.split(' ').map(Number));

const rotateGear = (gearIndex, direction) => {
  if (direction === 1) {
    gears[gearIndex].rotateClockwise();
  } else {
    gears[gearIndex].rotateCounterClockwise();
  }
};

const processOrder = (startIdx, direction) => {
  const directions = Array(4).fill(0);
  directions[startIdx] = direction;

  for (let i = startIdx; i > 0; i--) {
    if (gears[i].teeth[6] !== gears[i - 1].teeth[2]) {
      directions[i - 1] = -directions[i];
    } else {
      break;
    }
  }

  for (let i = startIdx; i < 3; i++) {
    if (gears[i].teeth[2] !== gears[i + 1].teeth[6]) {
      directions[i + 1] = -directions[i];
    } else {
      break;
    }
  }

  directions.forEach((dir, idx) => {
    if (dir !== 0) {
      rotateGear(idx, dir);
    }
  });
};

orders.forEach(([idx, dir]) => {
  processOrder(idx - 1, dir);
});

const score = gears.reduce((sum, gear, index) => {
  if (gear.teeth[0] === '1') {
    return sum + Math.pow(2, index);
  }
  return sum;
}, 0);

console.log(score);
