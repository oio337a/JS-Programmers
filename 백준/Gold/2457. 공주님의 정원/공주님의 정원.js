const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0], 10);
const flowers = input.slice(1).map(line => {
    const [startMonth, startDay, endMonth, endDay] = line.split(' ').map(Number);
    return { start: startMonth * 100 + startDay, end: endMonth * 100 + endDay };
});

// 꽃들을 피는 날 기준으로 오름차순, 피는 날이 같다면 지는 날 기준으로 내림차순 정렬
flowers.sort((a, b) => {
    if (a.start !== b.start) return a.start - b.start;
    return b.end - a.end;
});

const start = 301;
const end = 1130;

let count = 0;
let currentEnd = start;
let index = 0;

while (currentEnd <= end) {
    let maxEnd = currentEnd;

    while (index < n && flowers[index].start <= currentEnd) {
        if (flowers[index].end > maxEnd) {
            maxEnd = flowers[index].end;
        }
        index++;
    }

    if (maxEnd == currentEnd) {
        // 더 이상 진행할 수 없으면 종료
        console.log(0);
        return;
    }

    currentEnd = maxEnd;
    count++;
}

console.log(count);
