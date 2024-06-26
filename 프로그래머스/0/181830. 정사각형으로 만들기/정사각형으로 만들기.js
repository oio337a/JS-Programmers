function solution(arr) {
    let row = arr.length
    const col = arr[0].length
    
    if (row > col) arr.forEach(e=> e.push(...new Array(row - col).fill(0)))
    else {
        for (row; row < col; row++) {
            arr.push(new Array(col).fill(0))
        }
    }
    return arr
}