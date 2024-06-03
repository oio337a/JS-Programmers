function solution(start, end_num) {
    return Array(start - end_num + 1).fill(start).map((v, i) => v - i)
}