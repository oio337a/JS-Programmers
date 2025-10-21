const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, S, R] = input[0].split(' ').map(Number);
const brokenTeams = input[1].split(' ').map(Number);
const reserveTeams = input[2].split(' ').map(Number);

// 1. 각 팀의 카약 상태를 나타내는 배열 (인덱스 1~N 사용)
const teams = Array(N + 1).fill(1);

// 2. 카약 상태 초기화
brokenTeams.forEach(team => teams[team]--);
reserveTeams.forEach(team => teams[team]++);

// 3. 카약 빌려주기
for (let i = 1; i <= N; i++) {
    // 현재 팀이 카약이 없는 경우
    if (teams[i] === 0) {
        // 앞 팀(i-1)이 여분이 있는지 확인
        if (i > 1 && teams[i - 1] === 2) {
            teams[i]++;
            teams[i - 1]--;
        } 
        // 뒷 팀(i+1)이 여분이 있는지 확인
        else if (i < N && teams[i + 1] === 2) {
            teams[i]++;
            teams[i + 1]--;
        }
    }
}

// 4. 최종적으로 카약이 없는 팀의 수 계산
let cantStartCount = 0;
for (let i = 1; i <= N; i++) {
    if (teams[i] === 0) {
        cantStartCount++;
    }
}

console.log(cantStartCount);