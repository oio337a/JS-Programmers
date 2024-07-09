function solution(common) {
    let a = common[1] - common[0]
    let b = common[1] / common[0]
    let flag = 0
    if (common[2] / common[1] === b) flag = 1
    return flag ? common[common.length - 1] * b : common[common.length - 1] + a
}