function solution(keymap, targets) {
    var answer = [];
    
    const obj = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
      .reduce((acc, letter) => {
        acc[letter] = Infinity;
        return acc;
      }, {});

    for (let key of keymap) {
        const k_list = key.split('')
        
        for (let i = 0; i < k_list.length; i++) {
            obj[k_list[i]] = Math.min(obj[k_list[i]], i + 1)
        }
    }
    
    for (let target of targets) {
        let cnt = 0
        for (let chr of target.split('')) {
            cnt += obj[chr]
        }
        
        answer.push(cnt === Infinity ? -1 : cnt)
    }
    return answer
}

