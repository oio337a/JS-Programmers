function solution(my_string, is_suffix) {
    const len = is_suffix.length
    return +(my_string.slice(my_string.length - len) === is_suffix)
}