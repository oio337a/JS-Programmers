const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n')

let text = input[0]
const target = input[1]

while (true) {
    if (!text.includes(target)) break
    text = text.replaceAll(target, '')

    if (!text.length) {
        console.log('FRULA')
        process.exit(0)
    }
}

console.log(text)