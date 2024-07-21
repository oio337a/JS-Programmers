function solution(number, limit, power) {
    function 약수(num) {
        let result = 0
        let index = 1;
        while (index <= Math.sqrt(num)) {
          if (num % index === 0) {
            result++
            if (num / index !== index) result++
          }
          index++
        }
        return result
    }
    let answer = 0;
    for (let i = 1; i <= number; i++) {
        let temp = 약수(i)
        answer += temp > limit ? power : temp
    }
    return answer
}