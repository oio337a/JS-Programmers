function solution(my_string) {
    my_string = new Set(my_string)
    return [...my_string].join('')
}