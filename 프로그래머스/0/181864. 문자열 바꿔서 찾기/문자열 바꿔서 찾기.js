function solution(myString, pat) {
    const list = [...myString].map(e => e === 'A' ? 'B' : 'A')
    return +list.join('').includes(pat)
}