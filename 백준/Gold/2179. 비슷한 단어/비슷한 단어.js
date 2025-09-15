const fs = require('fs');
// 백준 제출 시 경로는 '/dev/stdin'으로 변경해야 합니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input.shift(), 10);
const words = input;

// 1. 단어를 원래 인덱스와 함께 저장하고 사전순으로 정렬합니다.
const wordsWithIndex = words.map((word, index) => ({ word, index }));
wordsWithIndex.sort((a, b) => a.word.localeCompare(b.word));

// 공통 접두사 길이를 계산하는 함수
const getPrefixLength = (s1, s2) => {
  let len = 0;
  const minLen = Math.min(s1.length, s2.length);
  for (let i = 0; i < minLen; i++) {
    if (s1[i] === s2[i]) {
      len++;
    } else {
      break;
    }
  }
  return len;
};

let maxLength = 0;
const candidates = []; // maxLength를 가진 후보 단어 쌍들을 저장할 배열

// 2. 정렬된 목록을 순회하며 가장 긴 접두사 길이(maxLength)를 찾습니다.
for (let i = 0; i < N - 1; i++) {
  const s1 = wordsWithIndex[i].word;
  const s2 = wordsWithIndex[i+1].word;
  const currentLength = getPrefixLength(s1, s2);
  
  maxLength = Math.max(maxLength, currentLength);
}

// 3. maxLength와 같은 길이의 접두사를 가진 모든 인접 쌍을 후보에 추가합니다.
for (let i = 0; i < N - 1; i++) {
    const s1_obj = wordsWithIndex[i];
    const s2_obj = wordsWithIndex[i+1];
    
    if (getPrefixLength(s1_obj.word, s2_obj.word) === maxLength) {
        candidates.push(s1_obj);
        candidates.push(s2_obj);
    }
}

// 4. 후보 단어들 중 원래 입력 순서가 가장 빠른 단어를 S로 찾습니다.
let S = null;
let minIndex = Infinity;

for (const cand of candidates) {
    if (cand.index < minIndex) {
        minIndex = cand.index;
        S = cand.word;
    }
}

// 5. S와 쌍을 이루는 T를 찾습니다.
//    (S와 maxLength 길이의 접두사를 가지는 단어 중 하나)
let T = null;
for (const cand of candidates) {
    // 자기 자신이 아니고, S와 접두사 길이가 maxLength인 단어를 찾습니다.
    if (cand.word !== S && getPrefixLength(S, cand.word) === maxLength) {
        T = cand.word;
        break; // 하나만 찾으면 됩니다.
    }
}

console.log(S);
console.log(T);