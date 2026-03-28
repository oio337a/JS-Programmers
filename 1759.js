const fs = require('fs');
const [LC, ...input] = fs.readFileSync('test.txt').toString().trim().split('\r\n');

const chars = input[0].split(' ').sort()
const [L, C] = LC.split(' ').map(Number)
const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
const result = [];
const P = [];

function backtrack(pos, prev, consonant, vowel) {
    if (pos === L) {
        if (consonant >= 2 && vowel >= 1) {
            result.push(P.join(''));
        }
        return;
    }

    for (let i = prev + 1; i < C; i++) {
        P[pos] = chars[i];
        const isV = vowels.has(chars[i]);
        backtrack(pos + 1, i, consonant + (isV ? 0 : 1), vowel + (isV ? 1 : 0));
    }
}

backtrack(0, -1, 0, 0);
console.log(result.join('\n'));