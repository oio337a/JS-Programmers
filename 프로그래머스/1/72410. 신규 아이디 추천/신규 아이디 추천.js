function solution(new_id) {
    // 1단계: 소문자로 치환
    let answer = new_id.toLowerCase();

    // 2단계: 허용된 문자만 남기기
    answer = answer.replace(/[^a-z0-9-_.]/g, '');

    // 3단계: 마침표 연속 → 하나로
    answer = answer.replace(/\.{2,}/g, '.');

    // 4단계: 처음과 끝의 마침표 제거
    answer = answer.replace(/^\.|\.$/g, '');

    // 5단계: 빈 문자열이면 "a" 대입
    if (answer.length === 0) {
        answer = 'a';
    }

    // 6단계: 길이가 16자 이상이면 앞 15자만 남기고 끝 마침표 제거
    if (answer.length >= 16) {
        answer = answer.slice(0, 15);
        answer = answer.replace(/\.$/, '');
    }

    // 7단계: 길이가 2자 이하라면 마지막 문자를 반복해서 길이 3으로
    while (answer.length < 3) {
        answer += answer[answer.length - 1];
    }

    return answer;
}