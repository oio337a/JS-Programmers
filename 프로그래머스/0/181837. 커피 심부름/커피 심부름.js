function solution(order) {
    let menu = {
        'americano' : 4500,
        'cafelatte' : 5000
    }
    return order.reduce((a, c) => c.includes('cafelatte') ? a + menu['cafelatte'] : a + menu['americano'], 0)
}