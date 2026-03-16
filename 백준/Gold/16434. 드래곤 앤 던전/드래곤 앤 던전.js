const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, initATK] = input[0].split(' ').map(Number);
const rooms = input.slice(1).map(line => line.split(' ').map(Number));

function canClearDungeon(maxHP) {
  let curHP = maxHP;
  let atk = initATK;

  for (let i = 0; i < N; i++) {
    const [t, a, h] = rooms[i];

    if (t === 1) {
      // 몬스터 전투
      const monsterATK = a;
      const monsterHP = h;

      // 용사가 때려야 하는 횟수
      const heroHits = Math.ceil(monsterHP / atk);
      // 몬스터가 반격하는 횟수 (용사가 마지막에 죽이지 않으면 반격 못함)
      const monsterHits = heroHits - 1;

      curHP -= monsterATK * monsterHits;
      if (curHP <= 0) return false;

    } else {
      // 포션
      atk += a;
      curHP = Math.min(maxHP, curHP + h);
    }
  }

  return true;
}

// 이분 탐색
let left = 1n;
let right = 1000000n * 1000000n * BigInt(N); // 충분히 큰 값

while (left <= right) {
  const mid = (left + right) / 2n;
  if (canClearDungeon(Number(mid))) {
    right = mid - 1n;
  } else {
    left = mid + 1n;
  }
}

console.log(String(left));