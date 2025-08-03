const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const isVowel = (ch) => 'aeiou'.includes(ch);

for (const password of input) {
    if (password === 'end') break;

    let hasVowel = false;
    let isAcceptable = true;

    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < password.length; i++) {
        const ch = password[i];

        // 1. 모음 체크
        if (isVowel(ch)) {
            hasVowel = true;
            vowelCount++;
            consonantCount = 0;
        } else {
            consonantCount++;
            vowelCount = 0;
        }

        // 2. 모음 or 자음이 3개 연속되면 안 됨
        if (vowelCount === 3 || consonantCount === 3) {
            isAcceptable = false;
            break;
        }

        // 3. 같은 글자 연속 2번 오면 안 됨 (ee, oo는 예외)
        if (i > 0 && password[i] === password[i - 1]) {
            if (!(password[i] === 'e' || password[i] === 'o')) {
                isAcceptable = false;
                break;
            }
        }
    }

    if (!hasVowel) isAcceptable = false;

    const result = isAcceptable ? 'acceptable' : 'not acceptable';
    console.log(`<${password}> is ${result}.`);
}
