/**
 * 트럭
 */

let [nwL, input] = require('fs').readFileSync(0).toString().trim().split('\n');
// 트럭 갯수, 다리 길이, 다리 하중
const [n, w, L] = nwL.split(' ').map(Number);
input = input.split(' ').map(Number);

let time = 1;
let bridge = [];
let bridge_w = 0;
let idx = 0;
while (true) {
  if (bridge_w + input[idx] <= L && bridge.length < w) {
    bridge_w += input[idx];
    bridge.push([input[idx++], w]);
  }
  bridge = bridge
    .map(([e, we]) => [e, we - 1])
    .filter(([e, we]) => {
      if (we > 0) return true;
      else {
        bridge_w -= e;
        return false;
      }
    });
  time++;
  if (input.length <= idx && bridge.length === 0) break;
}

console.log(time);
