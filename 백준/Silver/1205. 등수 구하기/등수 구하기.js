const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, newScore, P] = input[0].split(' ').map(Number);
const scores = N === 0 ? [] : input[1].split(' ').map(Number);

let rank = 1;

// newScore보다 큰 점수 개수를 센다 = rank 결정
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > newScore) {
        rank++;
    } else if (scores[i] === newScore) {
        continue; // 아직 랭크는 그대로 유지
    } else {
        break;
    }
}

// 새 점수가 랭킹 리스트에 들어갈 수 있는지 판단
// 리스트가 꽉 찼고, newScore가 꼴등 이하일 경우
if (N === P && scores[P - 1] >= newScore) {
    console.log(-1);
} else {
    console.log(rank);
}
