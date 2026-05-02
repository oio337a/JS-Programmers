function transM(time) {
    const [m, s] = time.split(':').map(Number)
    return m * 60 + s
}

function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    
    // 우선은 분을 초로 단위를 통일한다.
    // 커맨드 실행하면서 오프닝 구간인지 확인
    
    let video_len_ss = transM(video_len)
    let pos_ss = transM(pos)
    let op_start_ss = transM(op_start)
    let op_end_ss = transM(op_end)
    
    for (let comm of commands) {
        if (op_start_ss <= pos_ss && pos_ss <= op_end_ss) {
            pos_ss = op_end_ss
        }
        if (comm === "prev") {
            pos_ss = pos_ss < 10 ? 0 : pos_ss - 10
        } else {
            pos_ss = pos_ss + 10 > video_len_ss ? video_len_ss : pos_ss + 10
        }
        
        if (op_start_ss <= pos_ss && pos_ss <= op_end_ss) {
            pos_ss = op_end_ss
        }
    }
    
    const mm = Math.floor(pos_ss / 60)
    const ss = pos_ss - (mm * 60)
    return String(mm).padStart(2, '0') + ':' + String(ss).padStart(2, '0');
}