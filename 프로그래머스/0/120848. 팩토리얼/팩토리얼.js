function solution(n) {
    for (let i = 1; i <= 10; i++) {
        let fac = 1
        for (let j = 1; j <= i; j++) {
            fac *= j
            if (fac > n) return i - 1
        }
        if (fac === n) return i
    }
}