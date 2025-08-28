const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

const [p, m] = input[0].split(' ').map(Number);

const rooms = [];

for (let i = 1; i <= p; i++) {
  const [levelStr, id] = input[i].split(' ');
  const level = Number(levelStr);

  let placed = false;

  for (const room of rooms) {
    const [baseLevel] = room[0]; // 방의 첫 플레이어 레벨
    if (
      room.length < m &&
      baseLevel - 10 <= level &&
      level <= baseLevel + 10
    ) {
      room.push([level, id]);
      placed = true;
      break;
    }
  }

  if (!placed) {
    rooms.push([[level, id]]);
  }
}

// 출력
for (const room of rooms) {
  if (room.length === m) {
    console.log('Started!');
  } else {
    console.log('Waiting!');
  }

  room
    .sort((a, b) => a[1].localeCompare(b[1])) // 아이디 사전순 정렬
    .forEach(([lv, id]) => console.log(lv, id));
}
