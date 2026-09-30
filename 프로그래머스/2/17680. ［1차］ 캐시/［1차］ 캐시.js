function solution(cacheSize, cities) {
    // 캐시 크기가 0인 경우 모든 요청이 Cache Miss 처리됨
    if (cacheSize === 0) return cities.length * 5;

    let answer = 0;
    let cache = new Map();

    for (let i = 0; i < cities.length; i++) {
        // 대소문자 구분을 하지 않으므로 모두 소문자로 통일
        let city = cities[i].toLowerCase();

        if (cache.has(city)) {
            // 1. Cache Hit: 기존 요소를 삭제하고 다시 추가하여 가장 최근(오른쪽 끝)으로 갱신
            cache.delete(city);
            cache.set(city, true);
            answer += 1;
        } else {
            // 2. Cache Miss: 캐시가 가득 찼다면 가장 오래된 항목(첫 번째 요소)을 제거
            if (cache.size >= cacheSize) {
                let oldestKey = cache.keys().next().value;
                cache.delete(oldestKey);
            }
            // 새로운 도시를 캐시에 추가
            cache.set(city, true);
            answer += 5;
        }
    }

    return answer;
}