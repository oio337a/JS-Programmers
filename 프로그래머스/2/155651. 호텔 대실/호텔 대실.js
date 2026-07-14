function solution(book_time) {
    // 1. 하루 전체의 '분'을 담을 수 있는 배열 생성 (0분 ~ 1439분 + 청소 10분 여유 = 1450 크기)
    const timeArr = new Array(1450).fill(0);

    // 2. "HH:MM" 문자열을 분(minute) 단위 정수로 변환하는 함수
    function timeToMin(timeStr) {
        const [hour, minute] = timeStr.split(':').map(Number);
        return hour * 60 + minute;
    }

    // 3. 예약 시간을 돌면서 입실 시간에 +1, 퇴실(+청소) 시간에 -1 마킹
    for (const [start, end] of book_time) {
        const startMin = timeToMin(start);
        const endMin = timeToMin(end) + 10; // 퇴실 시간 + 청소 시간 10분

        timeArr[startMin] += 1; // 방 하나 사용 시작
        
        // 청소가 끝나는 시점에 방을 다시 반납 (배열 범위를 넘지 않게 안전장치)
        if (endMin < 1450) {
            timeArr[endMin] -= 1; 
        }
    }

    // 4. 누적합을 구하며 동시에 가장 많은 방이 겹치는 순간(최댓값) 찾기
    let maxRooms = 0;
    let currentRooms = 0;

    for (let i = 0; i < 1450; i++) {
        currentRooms += timeArr[i]; // 시간에 따라 방 개수가 오르락내리락 합니다.
        if (currentRooms > maxRooms) {
            maxRooms = currentRooms; // 가장 높이 올라갔을 때의 값을 갱신
        }
    }

    return maxRooms;
}