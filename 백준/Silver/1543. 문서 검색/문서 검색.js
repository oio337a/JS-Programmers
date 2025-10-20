const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let origin = input[0]
let target = input[1]
const o_len = origin.length
const t_len = target.length

let removeString = origin.replaceAll(target, '')

console.log((o_len - removeString.length) / t_len)