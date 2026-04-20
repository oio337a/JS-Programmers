function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function lcmMultiple(arr) {
  return arr.reduce((acc, val) => lcm(acc, val));
}

function solution(signals) {
  const periods = signals.map(([G, Y, R]) => G + Y + R);
  const limit = lcmMultiple(periods);

  for (let t = 1; t <= limit; t++) {
    let allYellow = true;

    for (let [G, Y, R] of signals) {
      const cycle = G + Y + R;
      const pos = t % cycle || cycle;

      if (pos <= G || pos > G + Y) {
        allYellow = false;
        break; // 하나라도 노란불이 아니면 바로 탈락
      }
    }

    if (allYellow) return t;
  }

  return -1;
}