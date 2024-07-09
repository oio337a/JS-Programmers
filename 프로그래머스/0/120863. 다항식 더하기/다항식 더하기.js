function solution(polynomial) {
    [x_num, num] = [0, 0]
    polynomial.split(' + ').forEach(e=> {
        const x_idx = e.indexOf('x')
        if (x_idx !== -1) {
            if (x_idx === 0) x_num++;
            else x_num += +e.slice(0, x_idx)
        } else num += +e
    })
    if (x_num === 1) {
        return num ? 'x + ' + num : 'x'
    }
    return x_num ? (num ? x_num + 'x + ' + num : x_num + 'x') : num + ''
}