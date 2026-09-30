function solution(n, w, num) {
    let currentHeight = Math.floor((num - 1) / w);
    let maxHeight = Math.floor((n - 1) / w);
    let count = 0;
    
    // 현재 상자가 위치한 열(column) 구하기 (0부터 시작)
    let col = (currentHeight % 2 === 0) 
        ? (num - 1) % w 
        : w - 1 - ((num - 1) % w);
        
    // 현재 층부터 맨 위 층까지 올라가면서 상자가 존재하는지 확인
    for (let h = currentHeight; h <= maxHeight; h++) {
        let boxNum;
        if (h % 2 === 0) {
            boxNum = h * w + col + 1;
        } else {
            boxNum = (h + 1) * w - col;
        }
        
        if (boxNum <= n) {
            count++;
        }
    }
    
    return count;
}