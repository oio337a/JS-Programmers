function solution(my_string, overwrite_string, s) {
    const l = overwrite_string.length
    return my_string.slice(0, s) + overwrite_string + my_string.slice(s + l)
}