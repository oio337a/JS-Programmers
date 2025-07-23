let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split(' ');

const str = input[0].toUpperCase()
const cntStr = new Set(str)

let cntList = []
cntStr.forEach((target) => {
    let cnt = 0
    str.split('').forEach((s) => {
        if (target === s) cnt++
    })
    cntList.push(cnt)
})

let maxNum = Math.max(...cntList)
let maxCnt = 0
cntList.forEach(e => {
    if (e === maxNum) maxCnt++
})

if (maxCnt > 1) {
    console.log('?')
} else {
    console.log([...cntStr][cntList.indexOf(maxNum)])
}
