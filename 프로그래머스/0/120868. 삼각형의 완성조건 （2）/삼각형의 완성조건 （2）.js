function solution(sides) {
    const [one, two] = sides.sort((a, b) => a - b)
    return one * 2 - 1
}