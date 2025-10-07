function solution(survey, choices) {
    var answer = '';
    const scores = new Map([[1, 3], [2, 2], [3, 1], [4, 0], [5, 1], [6, 2], [7, 3]])
    const type = new Map([['R', 0], ['T', 0], ['C', 0], ['F', 0], ['J', 0], ['M', 0], ['A', 0], ['N', 0]])
    
    for (let i = 0; i < survey.length; i++) {
        let [a, b] = survey[i].split('')
        
        if (choices[i] > 4) {
            a = b
        }
        type.set(a, type.get(a) + scores.get(choices[i]))
    }
    if (type.get('R') >= type.get('T')) answer += 'R'
    else answer += 'T'
    
    if (type.get('C') >= type.get('F')) answer += 'C'
    else answer += 'F'
    
    if (type.get('J') >= type.get('M')) answer += 'J'
    else answer += 'M'
    
    if (type.get('A') >= type.get('N')) answer += 'A'
    else answer += 'N'
    return answer;
}