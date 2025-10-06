function solution(commands) {
    const answer = [];
    const parents = Array.from({ length: 51 }, () => 
        Array.from({ length: 51 }, (_, i) => null)
    );
    const values = Array.from({ length: 51 }, () => Array(51).fill(null));

    // parents 배열 초기화 (모든 셀이 자기 자신을 부모로 가짐)
    for (let r = 1; r <= 50; r++) {
        for (let c = 1; c <= 50; c++) {
            parents[r][c] = [r, c];
        }
    }

    // 대표 셀(루트)을 찾는 함수 (경로 압축 최적화 포함)
    function find(r, c) {
        const [pr, pc] = parents[r][c];
        if (pr === r && pc === c) {
            return [r, c];
        }
        return parents[r][c] = find(pr, pc);
    }

    // 두 셀 그룹을 병합하는 함수
    function union(r1, c1, r2, c2) {
        const [root1_r, root1_c] = find(r1, c1);
        const [root2_r, root2_c] = find(r2, c2);

        if (root1_r !== root2_r || root1_c !== root2_c) {
            // (r1, c1) 그룹의 값을 우선으로 함
            const value1 = values[root1_r][root1_c];
            const value2 = values[root2_r][root2_c];
            
            if (value1 !== null) {
                parents[root2_r][root2_c] = [root1_r, root1_c];
                values[root2_r][root2_c] = null; // 대표가 아니므로 값 비움
            } else {
                parents[root1_r][root1_c] = [root2_r, root2_c];
                values[root1_r][root1_c] = null;
            }
        }
    }

    for (const command of commands) {
        const parts = command.split(' ');
        const cmd = parts[0];

        if (cmd === 'UPDATE') {
            if (parts.length === 4) { // UPDATE r c value
                const [r, c, value] = parts.slice(1);
                const [root_r, root_c] = find(Number(r), Number(c));
                values[root_r][root_c] = value;
            } else { // UPDATE value1 value2
                const [value1, value2] = parts.slice(1);
                for (let r = 1; r <= 50; r++) {
                    for (let c = 1; c <= 50; c++) {
                        if (values[r][c] === value1) {
                            values[r][c] = value2;
                        }
                    }
                }
            }
        } else if (cmd === 'MERGE') {
            const [r1, c1, r2, c2] = parts.slice(1).map(Number);
            union(r1, c1, r2, c2);
        } else if (cmd === 'UNMERGE') {
            const [r, c] = parts.slice(1).map(Number);
            const [root_r, root_c] = find(r, c);
            const rootValue = values[root_r][root_c];

            const cellsToUnmerge = [];
            for (let i = 1; i <= 50; i++) {
                for (let j = 1; j <= 50; j++) {
                    const [pr, pc] = find(i, j);
                    if (pr === root_r && pc === root_c) {
                        cellsToUnmerge.push([i, j]);
                    }
                }
            }

            for (const [ur, uc] of cellsToUnmerge) {
                parents[ur][uc] = [ur, uc];
                values[ur][uc] = null;
            }
            values[r][c] = rootValue;

        } else if (cmd === 'PRINT') {
            const [r, c] = parts.slice(1).map(Number);
            const [root_r, root_c] = find(r, c);
            answer.push(values[root_r][root_c] === null ? "EMPTY" : values[root_r][root_c]);
        }
    }

    return answer;
}