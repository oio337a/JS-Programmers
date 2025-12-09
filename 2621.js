// 카드게임
// 포커의 게임을 점수화 하는 문제
// 각각의 케이스를 상위 조건순으로 순회하며 점수를 계산한다.

const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n')

// 카드 정보
const cards = input.slice().map(e => {
    const [color, number] = e.split(' ')
    return { color, number: Number(number)}
})

// 카드 숫자 기준으로 정렬
cards.sort((a, b) => a.number - b.number)

// 카드 정보 저장
// 같은 카드 색 개수
const colorCount = new Map()
// 같은 카드 숫자 개수
const numberCount = new Map()

for (const card of cards) {
    colorCount.set(card.color, (colorCount.get(card.color) || 0) + 1)
    numberCount.set(card.number, (numberCount.get(card.number) || 0) + 1)
}

// 같은 카드 색 개수가 5개이면서 숫자가 연속적일 때
if (colorCount.get(cards[0].color) === 5 && cards.every((e, i) => e.number === cards[0].number + i)) {
    console.log(900 + cards[4].number)
}

// 같은 카드 숫자 개수가 4개인 경우
else if (numberCount.get(cards[0].number) === 4) {
    console.log(800 + cards[0].number)
}

// 같은 카드 숫자가 3개, 2개 인 경우
else if (Array.from(numberCount.values()).includes(3) && Array.from(numberCount.values()).includes(2)) {
    console.log(10 * Array.from(numberCount.keys()).find(e => numberCount.get(e) === 3) + Array.from(numberCount.keys()).find(e => numberCount.get(e) === 2) + 700)
}

// 같은 카드 색깔이 5개인 경우
else if (colorCount.get(cards[0].color) === 5) {
    console.log(600 + cards[4].number)
}

// 카드 5장의 숫자가 연속적일 떄
else if (cards.every((e, i) => e.number === cards[0].number + i)) {
    console.log(500 + cards[4].number)
}

// 3장의 숫자가 같을 때
else if (Array.from(numberCount.values()).includes(3)) {
    console.log(400 + Array.from(numberCount.keys()).find(e => numberCount.get(e) === 3))
}

// 2장의 숫자가 같은 쌍이 2개일 경우 
else if (Array.from(numberCount.values()).filter(e => e === 2).length === 2) {
    const [a, b] = Array.from(numberCount.keys()).filter(e => numberCount.get(e) === 2)
    console.log(10 * Math.max(a, b) + Math.min(a, b) + 300)
}

// 2장의 숫자가 같을 때
else if (Array.from(numberCount.values()).filter(e => e === 2).length === 1) {
    console.log(200 + Array.from(numberCount.keys()).find(e => numberCount.get(e) === 2))
}

// 나머지 경우
else {
    // numberCount는 Map이기 때문에 Object.values(numberCount)는 []를 반환합니다.
    // Map의 value들을 로그로 보고 싶으면 Array.from(numberCount.values())를 사용해야 합니다.
    console.log(cards[4].number + 100)
}