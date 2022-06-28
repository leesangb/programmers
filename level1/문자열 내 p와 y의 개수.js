// https://programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
    let p = 0;
    let y = 0;

    for (let c of s) {
        const letter = c.toLowerCase();
        if (letter === 'p') p++;
        else if (letter === 'y') y++;
    }

    const answer = p === y;
    return answer;
}
