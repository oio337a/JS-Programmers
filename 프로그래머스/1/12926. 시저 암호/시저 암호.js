function solution(s, n) {
    return s.split('')
        .map(e => {
        if (e === ' ') return ' '
        if (e === e.toUpperCase()) {
            return String.fromCharCode('A'.charCodeAt() + (e.charCodeAt() - 65 + n) % 26)
        } else {
            return String.fromCharCode('a'.charCodeAt() + (e.charCodeAt() - 97 + n) % 26)
        }
    }).join('')
}