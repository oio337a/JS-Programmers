function solution(numer1, denom1, numer2, denom2) {
    [num, den] = [numer1 * denom2 + numer2 * denom1, denom1 * denom2]
    let i = Math.min(num, den)
    for (i; i > 0; i--) {
        if (num % i === 0 && den % i === 0) break
    }
    return [num / i, den / i]
}