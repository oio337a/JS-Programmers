function solution(message, spoiler_ranges) {
  // 1. 단어와 인덱스 범위 추출
  const words = [];
  let start = 0;
  for (let i = 0; i < message.length; i++) {
    if (message[i] === ' ') {
      words.push({ 
        word: message.slice(start, i), 
        start, 
        end: i - 1 
      });
      start = i + 1;
    }
  }
  // 마지막 단어 추가
  words.push({ word: message.slice(start), start, end: message.length - 1 });

  // 2. 스포일러 단어 판별
  const spoilerWords = new Map(); // 단어 -> [등장 위치들]
  const normalWords = new Set();  // 스포일러 아닌 곳에서 등장한 단어들

  for (let w of words) {
    let isSpoiler = false;
    for (let [s, e] of spoiler_ranges) {
      if (!(w.end < s || w.start > e)) {
        isSpoiler = true;
        break;
      }
    }
    if (isSpoiler) {
      if (!spoilerWords.has(w.word)) spoilerWords.set(w.word, []);
      spoilerWords.get(w.word).push([w.start, w.end]);
    } else {
      normalWords.add(w.word);
    }
  }

  // 3. 스포일러 구간을 순서대로 따라가며 공개되는 단어 확인
  let revealed = new Set();
  let importantCount = 0;

  for (let [s, e] of spoiler_ranges) {
    // 이 구간에 걸친 단어들 찾기
    const candidates = words.filter(w => !(w.end < s || w.start > e));
    // 왼쪽부터 순서대로 확인
    for (let w of candidates) {
      const word = w.word;
      if (
        spoilerWords.has(word) &&          // 스포일러 단어여야 하고
        !normalWords.has(word) &&          // 스포일러 아닌 곳에 등장하지 않아야 하고
        !revealed.has(word)                // 이전에 공개된 적 없어야 함
      ) {
        importantCount++;
        revealed.add(word);
      } else {
        revealed.add(word); // 공개는 됨
      }
    }
  }

  return importantCount;
}
