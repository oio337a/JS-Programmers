// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 문제
function solution(nums) {
    const prime = new Array(nums+1).fill(1);
    let count = nums-1;
    for (let i=2; i<Math.sqrt(nums); i++)
        if (prime[i])
            for (let j=i**2; j<=nums; j+=i)
                if (prime[j]) count--, prime[j]=0;
    return count;
}