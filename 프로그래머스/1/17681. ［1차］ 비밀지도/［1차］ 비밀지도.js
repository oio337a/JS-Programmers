function solution(n, arr1, arr2) {
    let arr = new Array()
    for (let i = 0; i < n; i++) {
        let row = (arr1[i] | arr2[i]).toString(2).padStart(n, '0').replaceAll('0', ' ').replaceAll('1', '#')
        arr.push(row)
    }
    return arr
}