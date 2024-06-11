function solution(myString) {
    return myString.split('').map(e => e > 'l' ? e : 'l').join('')
}