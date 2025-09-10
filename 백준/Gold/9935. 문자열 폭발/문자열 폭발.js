const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const originalStr = input[0];
const target = input[1];
const targetLen = target.length;

const stack = [];

for (let i = 0; i < originalStr.length; i++) {
    // 1. 현재 문자를 스택에 추가합니다.
    stack.push(originalStr[i]);

    // 2. 스택의 길이가 폭발 문자열보다 길거나 같아지면 폭발 여부를 확인합니다.
    if (stack.length >= targetLen) {
        // 3. 스택의 마지막 부분이 폭발 문자열과 일치하는지 검사합니다.
        // slice와 join을 사용해 스택의 끝부분을 문자열로 만들어 비교합니다.
        const recentStr = stack.slice(-targetLen).join('');
        
        if (recentStr === target) {
            // 4. 일치한다면, 폭발 문자열의 길이만큼 스택에서 pop하여 제거합니다.
            for (let j = 0; j < targetLen; j++) {
                stack.pop();
            }
        }
    }
}

// 5. 모든 작업이 끝난 후 스택에 남은 문자들을 합쳐서 결과를 만듭니다.
const result = stack.join('');

// 6. 결과가 비어있다면 'FRULA'를, 아니라면 결과 문자열을 출력합니다.
console.log(result.length > 0 ? result : 'FRULA');