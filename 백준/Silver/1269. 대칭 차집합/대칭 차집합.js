const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const [A, B] = input[0].split(' ').map(Number)
const A_list = new Set(input[1].split(' ').map(Number))
const B_list = new Set(input[2].split(' ').map(Number))

const a_difference = [...A_list].filter(x => !B_list.has(x))
const b_difference = [...B_list].filter(x => !A_list.has(x))

console.log(a_difference.length + b_difference.length)