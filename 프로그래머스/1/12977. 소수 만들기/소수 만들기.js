function solution(nums) {
    let answer = 0;
    const l = nums.length
    for (let i = 0; i < l - 2; i++) {
        for (let j = i + 1; j < l - 1; j++) {
            for (let k = j + 1; k < l; k++) {
                const num = nums[i] + nums[j] + nums[k]
                for (let q = 2; q < num; q++) {
                    if (num % q === 0) break
                    if (q === num - 1) answer++
                }
            }
        }
    }
    return answer;
}