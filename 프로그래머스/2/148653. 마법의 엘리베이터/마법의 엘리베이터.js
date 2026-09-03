function solution(storey) {
    let answer = 0;
    
    while (storey > 0) {
        let digit = storey % 10; // 현재 자리의 숫자
        storey = Math.floor(storey / 10); // 다음 자리수로 넘어가기 위한 준비
        
        if (digit > 5) {
            // 5보다 크면 더해서(올림) 0으로 만드는 게 유리함
            answer += (10 - digit);
            storey++; // 올림이 발생했으므로 윗자리에 1 추가
        } else if (digit < 5) {
            // 5보다 작으면 빼서(내림) 0으로 만드는 게 유리함
            answer += digit;
        } else {
            // 정확히 5인 경우, 다음 자리수를 확인하여 판단
            if (storey % 10 >= 5) {
                answer += 5;
                storey++; // 다음 자리가 5 이상이면 올려주는 게 유리
            } else {
                answer += 5; // 다음 자리가 4 이하면 그냥 내리는 게 유리
            }
        }
    }
    
    return answer;
}