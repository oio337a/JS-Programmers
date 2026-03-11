const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M] = input[0].split(' ').map(Number)
const videos = input[1].split(' ').map(Number)

let [s, e] = [Math.max(...videos), videos.reduce((pre, cur) => pre + cur, 0)]
let answer = 0
while(s <= e) {
    mid = Math.round((s + e) / 2)

    let [blue_lay, cnt_blue_lay] = [0, 0]
    for (let video of videos) {
        if (blue_lay + video > mid) {
            cnt_blue_lay++
            blue_lay = 0
        }
        blue_lay += video
    }
    if (blue_lay) cnt_blue_lay++

    if (cnt_blue_lay > M) s = mid + 1
    else {
        e = mid - 1
        answer = mid
    }
}

console.log(answer)