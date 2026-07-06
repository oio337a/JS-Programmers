function solution(picks, minerals) {
    var answer = 0;
    
    // 1. 가진 곡괭이로 캘 수 있는 최대 광물 수만큼만 남기고 자르기
    const maxMinerals = (picks[0] + picks[1] + picks[2]) * 5;
    const slicedMinerals = minerals.slice(0, maxMinerals);
    
    let miner_chunk = [];
    
    // 2. 광물을 5개씩 묶어서 다이아, 철, 돌의 개수를 카운트
    for (let i = 0; i < slicedMinerals.length; i += 5) {
        let [dia, irons, stones] = [0, 0, 0];
        
        for (let j = i; j < i + 5 && j < slicedMinerals.length; j++) {
            if (slicedMinerals[j] === "diamond") dia++;
            if (slicedMinerals[j] === "iron") irons++;
            if (slicedMinerals[j] === "stone") stones++;
        }
        
        miner_chunk.push([dia, irons, stones]);
    }
    
    // 3. 돌 곡괭이로 캤을 때 피로도가 높은 순서대로 내림차순 정렬
    miner_chunk.sort((a, b) => {
        if (a[0] !== b[0]) return b[0] - a[0]; // 다이아가 다르면 다이아 내림차순
        if (a[1] !== b[1]) return b[1] - a[1]; // 다이아가 같으면 철 내림차순
        return b[2] - a[2];                    // 다이아, 철 다 같으면 돌 내림차순
    });
    
    // 4. 정렬된 그룹에 가장 좋은 곡괭이부터 차례대로 매칭하여 피로도 계산
    for (const chunk of miner_chunk) {
        const [dia, irons, stones] = chunk;
        
        if (picks[0] > 0) {
            // 다이아 곡괭이 사용
            picks[0]--;
            answer += (dia * 1) + (irons * 1) + (stones * 1);
        } else if (picks[1] > 0) {
            // 철 곡괭이 사용
            picks[1]--;
            answer += (dia * 5) + (irons * 1) + (stones * 1);
        } else if (picks[2] > 0) {
            // 돌 곡괭이 사용
            picks[2]--;
            answer += (dia * 25) + (irons * 5) + (stones * 1);
        }
    }
    
    return answer;
}