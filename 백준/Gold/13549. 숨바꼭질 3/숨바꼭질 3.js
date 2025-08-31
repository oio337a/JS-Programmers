const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const MAX = 100000;
const dist = Array(MAX + 1).fill(Infinity);
dist[N] = 0;

// 덱을 배열로 구현
const deque = [];
let head = 0, tail = 0;

function pushFront(x) {
  deque[--head] = x;
}
function pushBack(x) {
  deque[tail++] = x;
}
function popFront() {
  return deque[head++];
}
function isEmpty() {
  return head === tail;
}

pushFront(N);

while (!isEmpty()) {
  const cur = popFront();

  if (cur === K) {
    console.log(dist[cur]);
    break;
  }

  // 순간이동 (가중치 0)
  const next1 = cur * 2;
  if (next1 <= MAX && dist[next1] > dist[cur]) {
    dist[next1] = dist[cur];
    pushFront(next1);
  }

  // -1 이동 (가중치 1)
  const next2 = cur - 1;
  if (next2 >= 0 && dist[next2] > dist[cur] + 1) {
    dist[next2] = dist[cur] + 1;
    pushBack(next2);
  }

  // +1 이동 (가중치 1)
  const next3 = cur + 1;
  if (next3 <= MAX && dist[next3] > dist[cur] + 1) {
    dist[next3] = dist[cur] + 1;
    pushBack(next3);
  }
}
