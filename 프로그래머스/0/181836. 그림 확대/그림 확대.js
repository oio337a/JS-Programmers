function solution(picture, k) {
    let answer = []
    picture.map(e => [...e].map(i => i.repeat(k)).join('')).forEach(e => {
      for (let i = 0; i < k; i++) {
          answer.push(e)
      }  
    })
    return answer
}