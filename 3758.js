const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n');

let t = Number(input[0]);
let line = 1;

for (let tc = 0; tc < t; tc++) {
    const [n, k, targetTeam, m] = input[line++].split(' ').map(Number);

    const scores = Array.from({ length: n + 1}, () => Array(k + 1).fill(0))
    const submitCount = Array(n + 1).fill(0)
    const lastSubmit = Array(n + 1).fill(0)

    for (let i = 0; i < m; i++) {
        const [team, problem, score] = input[line++].split(' ').map(Number);

        if (scores[team][problem] < score) scores[team][problem] = score;
        submitCount[team]++;
        lastSubmit[team] = i;
    }

    const totalScores = [];
    for (let i = 1; i <= n; i++) {
        const total = scores[i].reduce((acc, cur) => acc + cur, 0);
        totalScores.push({total, count: submitCount[i], last: lastSubmit[i], team: i});
    }

    totalScores.sort((a, b) => {
        if (b.total !== a.total) return b.total - a.total;
        if (b.count !== a.count) return a.count - b.count;
        return a.last - b.last
    })

    for (let rank = 0; rank < totalScores.length; rank++) {
        if (totalScores[rank].team === targetTeam) {
            console.log(rank + 1);
            break;
        }
    }
}


    // // 팀별 문제 점수
    // const scores = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));
    // const submitCount = Array(n + 1).fill(0);
    // const lastSubmit = Array(n + 1).fill(0);

    // for (let i = 0; i < m; i++) {
    //     const [team, problem, score] = input[line++].split(' ').map(Number);
    //     // 문제별 최고 점수 갱신
    //     if (scores[team][problem] < score) scores[team][problem] = score;
    //     // 제출 횟수 증가
    //     submitCount[team]++;
    //     // 마지막 제출 시간 기록
    //     lastSubmit[team] = i;
    // }

    // // 각 팀 총점 계산
    // const totalScores = [];
    // for (let i = 1; i <= n; i++) {
    //     const total = scores[i].reduce((a, b) => a + b, 0);
    //     totalScores.push({ total, count: submitCount[i], last: lastSubmit[i], team: i });
    // }

    // // 정렬: 총점 내림차순, 제출횟수 오름차순, 마지막 제출 시간 오름차순
    // totalScores.sort((a, b) => {
    //     if (b.total !== a.total) return b.total - a.total;
    //     if (a.count !== b.count) return a.count - b.count;
    //     return a.last - b.last;
    // });

    // // 목표 팀 순위 찾기
    // for (let rank = 0; rank < totalScores.length; rank++) {
    //     if (totalScores[rank].team === targetTeam) {
    //         console.log(rank + 1);
    //         break;
    //     }
    // }
