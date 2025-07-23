let fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().replace(/\s+/g, '').toUpperCase();
const uniqueStr = [...new Set(str)];

let cntList = [];
uniqueStr.forEach((char) => {
    cntList.push(str.split('').filter(c => c === char).length);
});

const maxNum = Math.max(...cntList);
const maxCnt = cntList.filter(c => c === maxNum).length;

console.log(maxCnt > 1 ? '?' : uniqueStr[cntList.indexOf(maxNum)]);