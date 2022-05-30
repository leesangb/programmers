// https://programmers.co.kr/learn/courses/30/lessons/42862

/**
 * 도난당한 학생이 여벌을 갖고 있는경우 여벌 목록에서 없앱니다.
 * @param {number[]} lost
 * @param {number[]} reserve
 * @returns {{ fixedReserve: Set<number>, fixedLost: number[] }}
 */
function fixLostAndReserve(lost, reserve) {
    const reserveSet = new Set(reserve);
    const fixedLost = [];

    lost.forEach((student) => {
        if (!reserveSet.delete(student)) fixedLost.push(student);
    });

    fixedLost.sort();

    return {
        fixedReserve: reserveSet,
        fixedLost: fixedLost,
    };
}

function solution(n, lost, reserve) {
    const { fixedReserve, fixedLost } = fixLostAndReserve(lost, reserve);
    let answer = n - fixedLost.length;

    for (let i = 0; i < fixedLost.length; i++) {
        if (fixedReserve.size === 0) break;

        const student = fixedLost[i];
        const left = student - 1;
        const right = student + 1;

        if (fixedReserve.delete(left) || fixedReserve.delete(right)) {
            answer++;
        }
    }

    return answer;
}
