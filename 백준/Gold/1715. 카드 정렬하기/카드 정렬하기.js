/**
 * 카드 정렬하기
 */

const [N, ...cards] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

class MinHeap {
  constructor(props) {
    this.value = [];
  }

  size() {
    return this.value.length;
  }

  swap(i1, i2) {
    [this.value[i1], this.value[i2]] = [this.value[i2], this.value[i1]];
  }

  add(val) {
    this.value.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.size() - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while (this.value[parentIdx] && this.value[idx] < this.value[parentIdx]) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  poll() {
    if (this.size() === 1) {
      return this.value.pop();
    }

    const value = this.value[0];
    this.value[0] = this.value.pop();
    this.bubbleDown();
    return value;
  }

  bubbleDown() {
    let index = 0;
    let leftIdx = index * 2 + 1;
    let rightIdx = index * 2 + 2;

    while (
      (this.value[leftIdx] && this.value[leftIdx] < this.value[index]) ||
      (this.value[rightIdx] && this.value[rightIdx] < this.value[index])
    ) {
      let smallerIdx = leftIdx;
      if (this.value[rightIdx] && this.value[rightIdx] < this.value[smallerIdx])
        smallerIdx = rightIdx;
      this.swap(index, smallerIdx);
      index = smallerIdx;
      leftIdx = index * 2 + 1;
      rightIdx = index * 2 + 2;
    }
  }
}

let heap = new MinHeap();
for (let i = 0; i < N; i++) {
  heap.add(cards[i]);
}

let l = heap.size();
let answer = 0;
while (l > 1) {
  let temp = heap.poll() + heap.poll();
  heap.add(temp);
  answer += temp;
  l--;
}
console.log(answer);
