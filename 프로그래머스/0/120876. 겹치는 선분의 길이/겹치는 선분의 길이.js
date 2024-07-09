function solution(lines) {
    let temp = new Map()
    lines.forEach(([s, e]) => {
        for (s = s + 1; s <= e; s++) {
            temp.set(s, (temp.get(s) || 0) + 1)
        }
    })
    return [...temp].filter(([e, cnt]) => cnt > 1).length
}