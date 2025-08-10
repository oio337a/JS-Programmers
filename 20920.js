const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n');

const [N, M] = input[0].split(' ').map(Number);
const words = input.slice(1);

const freq = Object.create(null); // 빈도수 객체로 처리

for (let i = 0; i < N; i++) {
    const word = words[i];
    if (word.length < M) continue;
    if (freq[word]) {
        freq[word]++;
    } else {
        freq[word] = 1;
    }
}

// Object.keys → 정렬 대상
const sorted = Object.keys(freq).sort((a, b) => {
    if (freq[a] !== freq[b]) {
        return freq[b] - freq[a]; // 빈도 내림차순
    }
    if (a.length !== b.length) {
        return b.length - a.length; // 길이 내림차순
    }
    return a.localeCompare(b); // 알파벳 오름차순
});

// 출력 최적화: join으로 묶어서 한 번에 출력
console.log(sorted.join('\n'));
