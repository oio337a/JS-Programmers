function solution(h1, m1, s1, h2, m2, s2) {
    // 1. 시간을 모두 초(second) 단위로 변환
    const start = h1 * 3600 + m1 * 60 + s1;
    const end = h2 * 3600 + m2 * 60 + s2;

    // 2. 0시 0분 0초부터 T초까지 알람이 울린 총 횟수를 구하는 함수
    function getAlarms(time) {
        // 초침과 시침이 겹치는 횟수 (12시간 동안 719번)
        const hourAlarms = Math.floor(time * 719 / 43200);
        // 초침과 분침이 겹치는 횟수 (1시간 동안 59번)
        const minuteAlarms = Math.floor(time * 59 / 3600);
        
        let total = hourAlarms + minuteAlarms;
        
        // 12시 정각(43200초)에는 시침, 분침, 초침이 모두 겹치므로 중복 카운트(1회)를 빼줌
        if (time >= 43200) {
            total -= 1;
        }
        
        return total;
    }

    // 3. (start초 ~ end초] 까지의 알람 횟수 계산
    let answer = getAlarms(end) - getAlarms(start);

    // 4. 시작 시간(start) 정각에 알람이 울리는 경우 예외 처리
    // 수학적으로 정확히 정수 초에 바늘이 겹치는 경우는 정각(ex: 0시, 1시, 2시...)뿐입니다.
    if (start % 3600 === 0) {
        answer += 1;
    }

    return answer;
}