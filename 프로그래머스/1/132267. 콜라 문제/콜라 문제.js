function solution(a, b, n) {
    var answer = 0;
    while (a <= n) {
        answer += ~~(n / a) * b
        n = (~~(n / a) * b) + (n % a)
    }
    return answer
}