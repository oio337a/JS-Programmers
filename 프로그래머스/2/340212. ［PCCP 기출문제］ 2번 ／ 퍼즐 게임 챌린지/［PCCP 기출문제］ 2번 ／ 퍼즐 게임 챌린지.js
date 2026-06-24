function solution(diffs, times, limit) {
    var answer = 0;
    
    const MAX_DIFF = 100000
    let [s, e] = [1, MAX_DIFF]
    
    while (s <= e) {
        const mid = Math.floor((s+e)/2)
        
        let cnt = 0
        for (let i = 0; i < diffs.length; i++) {
            if (diffs[i] <= mid) cnt += times[i]
            else {
                cnt += (times[i - 1] + times[i]) * (diffs[i] - mid) + times[i]
            }
        }
        
        if (cnt <= limit) e = mid - 1
        else s = mid + 1
    }
    return s;
}