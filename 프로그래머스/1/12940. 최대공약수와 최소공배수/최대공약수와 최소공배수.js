function solution(n, m) {
    const min = Math.min(n, m)
    const max = Math.max(n, m)
    let a = 1
    for (let i = min; i > 1; i--) {
        if (n % i === 0 && m % i === 0) a = i
    }
    return [a, (n * m) / a]
}

function solution(n, m) {
    let gcd = 1;
    for(let i = 2; i <= Math.min(n, m); i++){
        if(n % i === 0 && m % i === 0){
            gcd = i;
        }
    }
    const lcm = n * m / gcd;
    return [gcd, lcm];
    
}