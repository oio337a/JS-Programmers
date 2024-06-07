function solution(a, b) {
    const A = Number(String(a) + String(b))
    const B = Number(String(b) + String(a))
    
    return A > B ? A : B
}