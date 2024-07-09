function solution(A, B) {
    if (!A.repeat(2).includes(B)) return -1
    let a = A.repeat(2)
    // console.log(a, A.repeat(2).indexOf(B), a.lastIndexOf(B))
    return B.length - Math.max(a.indexOf(B), a.lastIndexOf(B))
}