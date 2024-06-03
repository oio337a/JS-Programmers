function solution(my_string, is_prefix) {
    for (i in is_prefix) {
        if (my_string[i] !== is_prefix[i]) return 0
    }
    return 1
}