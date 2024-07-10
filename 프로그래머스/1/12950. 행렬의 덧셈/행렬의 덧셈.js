function solution(arr1, arr2) {
    return arr1.map((e, i) => e.map((el, j) => el + arr2[i][j]))
}