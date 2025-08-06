const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
const T = parseInt(input[0]);
let idx = 1;

for (let t = 0; t < T; t++) {
    const N = parseInt(input[idx++]);
    const data = input[idx++].split(' ').map(Number);

    const teamCounts = {};
    const teamScores = {};
    const teamPositions = {}; // 각 팀의 도착 순서 저장

    // 1. 각 팀 선수 수 및 위치 저장
    data.forEach((team) => {
        if (!teamCounts[team]) {
            teamCounts[team] = 0;
            teamScores[team] = [];
            teamPositions[team] = [];
        }
        teamCounts[team]++;
    });

    const validTeams = Object.keys(teamCounts)
        .map(Number)
        .filter(team => teamCounts[team] >= 6);

    let i = 1
    data.forEach((team) => {
        if (validTeams.includes(team)) teamPositions[team].push(i++)
    })

    // 2. 점수 계산
    const scoreBoard = [];

    for (const team of validTeams) {
        const positions = teamPositions[team];
        const score = positions.slice(0, 4).reduce((a, b) => a + b, 0);
        const fifth = positions[4]; // 5번째 선수 등수
        scoreBoard.push({ team, score, fifth });
    }

    // 3. 정렬
    scoreBoard.sort((a, b) => {
        if (a.score !== b.score) return a.score - b.score;
        return a.fifth - b.fifth;
    });

    console.log(scoreBoard[0].team);
}
